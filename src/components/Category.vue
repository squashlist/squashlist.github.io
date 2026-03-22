<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import SlItem from './Item.vue'

const props = defineProps({
    category: Object,
    searchQuery: { type: String, default: '' },
    paidFilter: { type: String, default: 'all' }
})

// ── Mobile accordion ───────────────────────────────────────────────────────────
const isMobile = ref(false)
const collapsed = ref(false)

const checkMobile = () => {
    isMobile.value = window.innerWidth <= 600
    collapsed.value = window.innerWidth <= 600
}

onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile)
})

// ── Filtering ──────────────────────────────────────────────────────────────────
const filteredItems = computed(() => {
    let items = props.category.items ?? []

    if (props.paidFilter === 'free') {
        items = items.filter(item => !item.paid)
    } else if (props.paidFilter === 'paid') {
        items = items.filter(item => item.paid)
    }

    if (props.searchQuery) {
        const q = props.searchQuery.toLowerCase()
        items = items.filter(item =>
            item.name.toLowerCase().includes(q) ||
            (item.desc && item.desc.toLowerCase().includes(q))
        )
    }

    return items
})

// ── Sorting ────────────────────────────────────────────────────────────────────
const sortDown = ref(true)

const sortedItems = computed(() => {
    return [...filteredItems.value].sort((a, b) => {
        if (sortDown.value) {
            return a.name > b.name ? 1 : -1
        } else {
            return a.name < b.name ? 1 : -1
        }
    })
})

// Stable category id for scroll-to anchor
const catId = computed(() =>
    'cat-' + props.category.cat.toLowerCase().replace(/\s+/g, '-')
)
</script>

<template>
    <div
        v-if="sortedItems.length > 0"
        class="category"
        :id="catId"
    >
        <h2>
            <font-awesome-icon :icon="`fa-solid fa-${category.icon}`" class="icon" />
            <span>{{ category.cat }}</span>
            <span class="item-count">{{ sortedItems.length }}</span>

            <button class="sort-btn" @click="sortDown = !sortDown">
                <font-awesome-icon
                    :icon="`fa-solid ${sortDown ? 'fa-arrow-down-a-z' : 'fa-arrow-up-z-a'}`"
                    :title="sortDown ? 'Sort Z to A' : 'Sort A to Z'"
                    class="icon"
                />
            </button>

            <button
                v-if="isMobile"
                class="collapse-btn"
                @click="collapsed = !collapsed"
                :aria-expanded="!collapsed"
                :aria-label="collapsed ? 'Expand category' : 'Collapse category'"
            >
                <font-awesome-icon :icon="`fa-solid fa-chevron-${collapsed ? 'down' : 'up'}`" />
            </button>
        </h2>

        <div class="items-wrapper" v-show="!collapsed">
            <sl-item
                v-for="item in sortedItems"
                :key="item.url"
                :item="item"
            />
        </div>
    </div>
</template>
