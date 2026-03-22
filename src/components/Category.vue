<script setup>
import { computed, ref } from 'vue'
import SlItem from './Item.vue'

const props = defineProps({
	category: Object,
	searchQuery: { type: String, default: '' }
})

const slug = (str) => str.toLowerCase().replaceAll(/\s+/g, '-')
const categoryId = computed(() => `category-${slug(props.category.cat)}`)

const sortDown = ref(true)
const collapsed = ref(localStorage.getItem(`collapsed-${props.category.cat}`) === 'true')

const sortedItems = computed(() => {
	return [...props.category.items].sort((a, b) => {
		if(sortDown.value) {
			return a.name > b.name ? 1 : -1
		} else {
			return a.name < b.name ? 1 : -1
		}
	})
})

const filteredItems = computed(() => {
	if (!props.searchQuery) return sortedItems.value
	const q = props.searchQuery.toLowerCase()
	return sortedItems.value.filter(item =>
		item.name.toLowerCase().includes(q) ||
		(item.desc && item.desc.toLowerCase().includes(q))
	)
})

const isVisible = computed(() => !props.searchQuery || filteredItems.value.length > 0)

const toggleCollapse = () => {
	collapsed.value = !collapsed.value
	localStorage.setItem(`collapsed-${props.category.cat}`, collapsed.value)
}

const copied = ref(false)
const copyLink = () => {
	const url = `${globalThis.location.origin}${globalThis.location.pathname}#${categoryId.value}`
	navigator.clipboard.writeText(url)
	copied.value = true
	setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
	<div :id="categoryId" class="category" v-show="isVisible">
		<h2>
			<font-awesome-icon :icon="`fa-solid fa-${ category.icon }`" class="icon"/>
			<span>{{ category.cat }}</span>
			<span class="count-badge">{{ filteredItems.length }}</span>
			<div class="header-actions">
				<button
					class="copy-btn"
					@click="copyLink"
					:aria-label="`Copy link to ${category.cat} category`"
					:title="copied ? 'Copied!' : 'Copy link'"
				>
					<font-awesome-icon
						:icon="`fa-solid ${copied ? 'fa-check' : 'fa-link'}`"
						class="icon"
					/>
					<span v-if="copied" class="copy-tooltip">Copied!</span>
				</button>
				<button
					@click="sortDown = !sortDown"
					:aria-label="`Sort ${category.cat} ${sortDown ? 'Z to A' : 'A to Z'}`"
					:title="sortDown ? 'Sort Z to A' : 'Sort A to Z'"
				>
					<font-awesome-icon
						:icon="`fa-solid ${ sortDown ? 'fa-arrow-down-a-z' : 'fa-arrow-up-z-a' }`"
						class="icon"
					/>
				</button>
				<button
					@click="toggleCollapse"
					:aria-label="collapsed ? `Expand ${category.cat}` : `Collapse ${category.cat}`"
					:title="collapsed ? 'Expand' : 'Collapse'"
				>
					<font-awesome-icon
						:icon="`fa-solid ${collapsed ? 'fa-chevron-down' : 'fa-chevron-up'}`"
						class="icon"
					/>
				</button>
			</div>
		</h2>
		<div :class="['items-wrapper', { collapsed }]">
			<p class="no-results" v-if="filteredItems.length === 0">No results</p>
			<sl-item
				v-for="item in filteredItems"
				:key="item.name"
				:item="item"
			/>
		</div>
	</div>
</template>
