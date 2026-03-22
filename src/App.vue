<script setup>
import { ref, unref, onMounted, watch } from 'vue'

import SlHeader from './components/Header.vue'
import SlFooter from './components/Footer.vue'
import SlCategory from './components/Category.vue'
import SlCategoryNav from './components/CategoryNav.vue'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref as fbRef, set, child, get } from 'firebase/database'
import fbConfig from './configs/firebase.config'

// ── Firebase ───────────────────────────────────────────────────────────────────
const app = initializeApp(fbConfig)
const db = getDatabase(app)
const dbRef = fbRef(db)

const categories = ref([])
const error = ref('')
const visits = ref(0)
const token = '*K^3j3YCB80cjijCxNg9JC2AlWyXBZh*zlcbaAilqL2YGx8q9CHcj5dJ$UgFcGooPV*lD5kpkOQswP4zcH$7GB6&ZifR009NFid'

// ── UI state ───────────────────────────────────────────────────────────────────
const searchQuery = ref('')
const paidFilter = ref('all')

// Initialise dark mode: respect saved preference, then OS setting
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const savedPref = localStorage.getItem('darkMode')
const darkMode = ref(savedPref !== null ? savedPref === 'true' : prefersDark)

const containerRef = ref(null)

// Apply dark mode attribute immediately so CSS picks it up
document.documentElement.setAttribute('data-theme', darkMode.value ? 'dark' : 'light')

watch(darkMode, val => {
    document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light')
    localStorage.setItem('darkMode', String(val))
})

// ── Keyboard navigation: arrow keys scroll the column container ────────────────
const onKeydown = (e) => {
    const active = document.activeElement
    const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(active?.tagName)
    if (isTyping) return

    if (e.key === 'ArrowRight') {
        e.preventDefault()
        containerRef.value?.scrollBy({ left: 300, behavior: 'smooth' })
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        containerRef.value?.scrollBy({ left: -300, behavior: 'smooth' })
    }
}

// ── Category jump nav ──────────────────────────────────────────────────────────
const scrollToCategory = (index) => {
    const container = containerRef.value
    if (!container) return
    const cats = container.querySelectorAll('.category')
    if (cats[index]) {
        if (window.innerWidth <= 600) {
            cats[index].scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            container.scrollTo({ left: cats[index].offsetLeft, behavior: 'smooth' })
        }
    }
}

onMounted(() => {
    getData()
    document.addEventListener('keydown', onKeydown)
    if (import.meta.env.VITE_DEV || document.location.search.includes('no-stats')) return
    updateVisits()
})

const getData = () => {
    get(child(dbRef, 'categories'))
        .then(snapshot => {
            if (snapshot.exists()) {
                categories.value = snapshot.val().data
            }
        })
        .catch(err => {
            error.value = err
        })
}

const updateVisits = () => {
    get(child(dbRef, 'visits'))
        .then(snapshot => {
            if (snapshot.exists()) {
                visits.value = snapshot.val().data
                visits.value++
                setVisits()
            }
        })
        .catch(err => console.log(err))
}

const setVisits = () => {
    set(
        fbRef(db, `/visits/`),
        { data: unref(visits), token },
        (err) => { if (err) console.log(err) }
    )
}
</script>

<template>
    <sl-header
        :categories="categories"
        :dark-mode="darkMode"
        @search="searchQuery = $event"
        @paid-filter="paidFilter = $event"
        @toggle-dark-mode="darkMode = !darkMode"
    />

    <sl-category-nav
        :categories="categories"
        @scroll-to="scrollToCategory"
    />

    <div class="wrapper">
        <main class="container" id="main" ref="containerRef" tabindex="-1">
            <div class="loading" v-if="!categories.length && !error">
                <img src="/icon.svg" alt="loading icon" width="40">
                <span class="sr-only">Loading lists...</span>
            </div>
            <div v-if="error" class="error">
                {{ error }}
            </div>
            <template v-else>
                <sl-category
                    v-for="(category, index) in categories"
                    :key="index"
                    :category="category"
                    :search-query="searchQuery"
                    :paid-filter="paidFilter"
                />
            </template>
        </main>
    </div>

    <sl-footer :visits="visits" />
</template>

<style lang="scss">
@keyframes rotateloader {
    from { transform: rotate(0deg); }
    to   { transform: rotate(359deg); }
}

.loading,
.error {
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: var(--text-muted);
}

.loading img {
    animation: rotateloader 1.5s infinite linear;
}
</style>
