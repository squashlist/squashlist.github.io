<script setup>
const props = defineProps({
    item: Object
})

const negPos = Math.random() < 0.5 ? '-' : ''
const css = {
    degrees: `${negPos}${Math.random() / 1.5}deg`,
    position: `${negPos}${Math.random() * 3}px`
}

const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000
const isNew = props.item.addedAt
    ? (Date.now() - new Date(props.item.addedAt).getTime()) < THIRTY_DAYS
    : false
</script>

<template>
    <a
        :href="item.url"
        class="item"
        target="_blank"
        rel="noopener noreferrer"
    >
        <p>
            {{ item.name }}
            <span v-if="isNew" class="new-badge">New</span>
            <font-awesome-icon
                v-if="item.paid"
                icon="fa-solid fa-money-bills"
                class="money-icon"
                title="Paid service"
            />
        </p>
        <p class="desc">{{ item.desc }}</p>
    </a>
</template>

<style scoped lang="scss">
.item {
    transform: rotate(v-bind('css.degrees'));
    right: v-bind('css.position');
}
</style>
