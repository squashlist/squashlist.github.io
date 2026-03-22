<script setup>
import { nextTick, ref, unref, watch, onMounted } from 'vue'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref as fbRef, set } from 'firebase/database'
import fbConfig from './../configs/firebase.config'

const props = defineProps({
    categories: { type: Array, default: () => [] },
    darkMode: Boolean
})

const emit = defineEmits(['search', 'paidFilter', 'toggleDarkMode'])

// ── Search ─────────────────────────────────────────────────────────────────────
const searchQuery = ref('')
watch(searchQuery, val => emit('search', val))

// ── Paid / free filter — cycles: all → free → paid → all ─────────────────────
const paidFilter = ref('all')
const filterLabels = { all: 'All', free: 'Free', paid: 'Paid' }
const cyclePaidFilter = () => {
    if (paidFilter.value === 'all') paidFilter.value = 'free'
    else if (paidFilter.value === 'free') paidFilter.value = 'paid'
    else paidFilter.value = 'all'
    emit('paidFilter', paidFilter.value)
}

// ── Suggestion form ────────────────────────────────────────────────────────────
const formWrapper = ref(null)
const formOpen = ref(false)
const form = ref({ name: '', url: '', desc: '', category: '' })
const nameInput = ref(null)
const btnDisabled = ref(true)
const apiError = ref(false)
const submitSuccess = ref(false)

const showForm = () => {
    formOpen.value = true
    form.value = { name: '', url: '', desc: '', category: '' }
    btnDisabled.value = true
    apiError.value = false
    submitSuccess.value = false
}

watch(formOpen, open => {
    if (open) nextTick(() => nameInput.value.focus())
})

watch(form, form => {
    btnDisabled.value = !(form.name && form.url)
}, { deep: true })

// ── Firebase ───────────────────────────────────────────────────────────────────
const app = initializeApp(fbConfig)
const db = getDatabase(app)

const submitSuggestion = () => {
    btnDisabled.value = true
    set(
        fbRef(db, `/suggest/item-${Math.floor(Date.now() * Math.random())}`),
        unref(form),
        (error) => { if (error) apiError.value = true }
    )
    .then(() => submitSuccess.value = true)
    .catch(() => apiError.value = true)
}

onMounted(() => {
    let touchstartX = 0
    let touchendX = 0

    formWrapper.value.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX
    })
    formWrapper.value.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX
        if (touchendX > touchstartX + 100) formOpen.value = false
    })

    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') formOpen.value = false
    })
})
</script>

<template>
    <header class="header">
        <!-- ── Top bar ─────────────────────────────────────────────────────── -->
        <div class="header-top">
            <div class="skip">
                <a class="sr-only sr-only-focusable" href="#main">Skip to content</a>
            </div>

            <div class="logo-wrapper">
                <img src="/sl-logo.svg" class="logo" alt="Squashlist logo" width="172" height="24" />
            </div>

            <input
                v-model="searchQuery"
                type="search"
                placeholder="Search all resources..."
                class="search-input"
                aria-label="Search resources"
            />

            <div class="header-controls">
                <!-- Dark mode toggle -->
                <button
                    class="control-btn"
                    @click="emit('toggleDarkMode')"
                    :title="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
                    :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
                >
                    <font-awesome-icon :icon="`fa-solid fa-${darkMode ? 'sun' : 'moon'}`" />
                </button>

                <!-- Paid / free filter -->
                <button
                    class="control-btn"
                    @click="cyclePaidFilter"
                    :title="`Showing: ${filterLabels[paidFilter]} — click to cycle`"
                    :aria-label="`Filter: ${filterLabels[paidFilter]}`"
                    :class="{ 'filter-active-free': paidFilter === 'free', 'filter-active-paid': paidFilter === 'paid' }"
                >
                    <font-awesome-icon icon="fa-solid fa-money-bills" />
                    <span class="filter-label">{{ filterLabels[paidFilter] }}</span>
                </button>

                <!-- Suggest item -->
                <div class="suggest">
                    <button @click="showForm">
                        <span class="tooltip">Suggest item</span>
                        <font-awesome-icon icon="fa-solid fa-circle-plus" class="icon" />
                    </button>
                </div>
            </div>
        </div>

        <h1 class="sr-only">Squash sites, apps, &amp; resources</h1>

        <!-- ── Slide-in suggestion form ───────────────────────────────────── -->
        <div>
            <div v-if="formOpen" class="form-bg" @click="formOpen = false"></div>

            <div :class="['form', { open: formOpen }]" ref="formWrapper">
                <h2 v-if="formOpen" class="form-title">
                    <span>Suggest item</span>
                    <button class="close-icon" @click="formOpen = false">
                        <font-awesome-icon icon="fa-solid fa-xmark" />
                        <span class="sr-only">Close</span>
                    </button>
                </h2>

                <div v-if="apiError" class="error">
                    <font-awesome-icon icon="fa-solid fa-face-frown" class="icon" />
                    <div>Unable to submit</div>
                </div>

                <div v-else-if="submitSuccess" class="success">
                    <font-awesome-icon icon="fa-solid fa-face-smile" class="icon" />
                    <div>Thanks for making a suggestion!</div>
                </div>

                <template v-else>
                    <template v-if="formOpen">
                        <p>Suggest an item to be included in the Squash List</p>
                        <form @submit.prevent="submitSuggestion">
                            <label>
                                <span>Name <span class="required">*</span></span>
                                <input
                                    v-model="form.name"
                                    type="text"
                                    name="name"
                                    required
                                    ref="nameInput"
                                >
                            </label>
                            <label>
                                <span>URL <span class="required">*</span></span>
                                <input
                                    v-model="form.url"
                                    type="url"
                                    name="url"
                                    required
                                >
                            </label>
                            <label>
                                <span>Category</span>
                                <select v-model="form.category" name="category">
                                    <option value="">— Select a category —</option>
                                    <option
                                        v-for="cat in categories"
                                        :key="cat.cat"
                                        :value="cat.cat"
                                    >{{ cat.cat }}</option>
                                </select>
                            </label>
                            <label>
                                <span>Description</span>
                                <input v-model="form.desc" type="text" name="desc">
                            </label>
                            <button type="submit" :disabled="btnDisabled">Submit</button>
                        </form>
                    </template>
                </template>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.filter-active-free {
    color: var(--filter-free) !important;
}
.filter-active-paid {
    color: var(--filter-paid) !important;
}
</style>
