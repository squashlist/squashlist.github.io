<script setup>
defineProps({
    categories: { type: Array, default: () => [] }
})

const emit = defineEmits(['scrollTo'])
</script>

<template>
    <nav v-if="categories.length" class="cat-nav" aria-label="Jump to category">
        <button
            v-for="(cat, index) in categories"
            :key="cat.cat"
            class="cat-chip"
            @click="emit('scrollTo', index)"
        >
            <font-awesome-icon :icon="`fa-solid fa-${cat.icon}`" />
            {{ cat.cat }}
        </button>
    </nav>
</template>
