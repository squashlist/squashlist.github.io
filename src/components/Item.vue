<script setup>
import { computed } from 'vue'

const props = defineProps({
	item: Object
})

const negPos = Math.random() < 0.5 ? '-' : ''
const css = {
	degrees: `${ negPos }${ Math.random() / 1.5 }deg`,
	position: `${ negPos }${ Math.random() * 3 }px`
}

const isNew = computed(() => {
	if (!props.item.dateAdded) return false
	const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000
	return props.item.dateAdded > thirtyDaysAgo
})
</script>

<template>
	<a :href="item.url" class="item" target="_blank" rel="noopener noreferrer">
		<p>
			{{ item.name }}
			<span class="new-badge" v-if="isNew">New</span>
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

	&:hover,
	&:focus {
		transform: rotate(0deg) translateY(-2px);
		right: 0;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		outline: none;
	}
}
</style>
