<script setup>
import { ref, unref, onMounted, computed, watch } from 'vue'

import SlHeader from './components/Header.vue'
import SlFooter from './components/Footer.vue'
import SlCategory from './components/Category.vue'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref as fbRef, set, child, get } from 'firebase/database'
import fbConfig from './configs/firebase.config'

// Firebase
const app = initializeApp(fbConfig)
const db = getDatabase(app)
const dbRef = fbRef(db)

const categories = ref([])
const error = ref('')

const visits = ref(0)
const token = '*K^3j3YCB80cjijCxNg9JC2AlWyXBZh*zlcbaAilqL2YGx8q9CHcj5dJ$UgFcGooPV*lD5kpkOQswP4zcH$7GB6&ZifR009NFid'

// Search
const searchQuery = ref('')

// Dark mode — persisted to localStorage
const darkMode = ref(localStorage.getItem('darkMode') === 'true')
watch(darkMode, val => {
	document.documentElement.classList.toggle('dark', val)
	localStorage.setItem('darkMode', val)
}, { immediate: true })

// Total resource count across all categories
const totalCount = computed(() =>
	categories.value.reduce((sum, cat) => sum + (cat.items?.length ?? 0), 0)
)

onMounted(() => {
	getData()
	if(import.meta.env.VITE_DEV || document.location.search.includes('no-stats')) return
	updateVisits()
})

const getData = () => {

	get(child(dbRef, 'categories'))
	.then((snapshot) => {
		if (snapshot.exists()) {
			categories.value = snapshot.val().data
		} else {
			console.log("No data available")
		}
	})
	.catch((err) => {
		error.value = err
	})

}

const updateVisits = () => {

	get(child(dbRef, 'visits'))
	.then((snapshot) => {
		if (snapshot.exists()) {
			visits.value = snapshot.val().data
			visits.value++
			setVisits()
		} else {
			console.log("No data available")
		}
	})
	.catch((err) => {
		console.log(err)
	})

}

const setVisits = () => {

	set(
		fbRef(db, `/visits/`),
		{
			data: unref(visits),
			token
		},
		(err) => {
			if(err) {
				console.log(err)
			}
		}
	)
}

</script>

<template>
	<sl-header
		:categories="categories"
		:total-count="totalCount"
		v-model:search="searchQuery"
		v-model:dark-mode="darkMode"
	/>
	<div class="wrapper">
		<main class="container" id="main">
			<template v-if="!categories.length && !error">
				<div class="skeleton-col" v-for="n in 4" :key="n">
					<div class="skeleton-h2"></div>
					<div class="skeleton-item" v-for="m in 5" :key="m"></div>
				</div>
			</template>
			<div v-else-if="error" class="error">
				{{ error }}
			</div>
			<template v-else>
				<sl-category
					v-for="category in categories"
					:key="category.cat"
					:category="category"
					:search-query="searchQuery"
				/>
			</template>
		</main>
	</div>
	<sl-footer />
</template>

<style lang="scss">
.error {
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>
