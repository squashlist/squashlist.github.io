<script setup>
import { nextTick, ref, unref, watch, onMounted } from 'vue'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref as fbRef, set } from 'firebase/database'
import fbConfig from './../configs/firebase.config'

const props = defineProps({
	categories: { type: Array, default: () => [] },
	totalCount: { type: Number, default: 0 },
	search: { type: String, default: '' },
	darkMode: { type: Boolean, default: false }
})

const emit = defineEmits(['update:search', 'update:darkMode'])

// Suggestion form
const formWrapper = ref(null)
const formOpen = ref(false)
const form = ref({
	name: '',
	url: '',
	desc: '',
	category: ''
})
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

watch(
	formOpen,
	formOpen => {
		if(formOpen) {
			nextTick(() => nameInput.value.focus())
		}
	}
)

watch(
	form,
	form => {
		btnDisabled.value = !(form.name && form.url)
	},
	{ deep: true }
)

// Firebase
const app = initializeApp(fbConfig)
const db = getDatabase(app)

const submitSuggestion = () => {

	btnDisabled.value = true

	set(
		fbRef(db, `/suggest/item-${ Math.floor(Date.now() * Math.random()) }`),
		unref(form),
		(error) => {
			if(error) {
				apiError.value = true
			} else {
				submitSuccess.value = true
			}
		}
	)
	.then(() => submitSuccess.value = true)
	.catch(() => apiError.value = true)
}

// Jump to a category column by scrolling it into view
const jumpToCategory = (catName) => {
	const slug = catName.toLowerCase().replaceAll(/\s+/g, '-')
	const el = document.getElementById(`category-${slug}`)
	if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}

onMounted(() => {
	// Detect swipe right to close the off-canvas form
	let touchstartX = 0
	let touchendX = 0

	const handleSwipe = () => {
		if(touchendX > (touchstartX + 100)) formOpen.value = false
	}

	formWrapper.value.addEventListener('touchstart', e => {
		touchstartX = e.changedTouches[0].screenX
	})

	formWrapper.value.addEventListener('touchend', e => {
		touchendX = e.changedTouches[0].screenX
		handleSwipe()
	})

	document.addEventListener('keydown', (e) => {
		if(e.code === 'Escape') {
			formOpen.value = false
		}
	})
})

</script>

<template>
	<header class="header">
		<!-- Row 1: skip link | logo | dark mode + suggest -->
		<div class="header-row1">
			<div class="skip">
				<a class="sr-only sr-only-focusable" href="#main">
					Skip to content
				</a>
			</div>
			<div class="logo-wrapper">
				<img src="/sl-logo.svg"
					class="logo"
					alt="Squashlist logo"
					width="172"
					height="24"
				/>
			</div>
			<div class="header-actions">
				<button
					class="icon-btn"
					@click="emit('update:darkMode', !darkMode)"
					:title="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
					:aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
				>
					<font-awesome-icon
						:icon="`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`"
						class="icon"
					/>
				</button>
				<button class="icon-btn" @click="showForm" aria-label="Suggest item" title="Suggest item">
					<span class="tooltip">Suggest item</span>
					<font-awesome-icon
						icon="fa-solid fa-circle-plus"
						class="icon"
					/>
				</button>
			</div>
		</div>

		<!-- Row 2: search | total count | category jump nav -->
		<div class="header-row2">
			<div class="search-wrapper">
				<font-awesome-icon icon="fa-solid fa-magnifying-glass" class="search-icon" />
				<input
					type="search"
					placeholder="Search resources..."
					:value="search"
					@input="emit('update:search', $event.target.value)"
					aria-label="Search resources"
					:disabled="!categories.length"
				/>
			</div>
			<span class="total-count" v-if="totalCount">{{ totalCount }} resources</span>
			<nav class="jump-nav" aria-label="Jump to category" v-if="categories.length">
				<button
					v-for="cat in categories"
					:key="cat.cat"
					@click="jumpToCategory(cat.cat)"
				>
					{{ cat.cat }}
				</button>
			</nav>
		</div>

		<h1 class="sr-only">Squash sites, apps, &amp; resources</h1>

		<!-- Suggestion form panel -->
		<div>
			<div
				v-if="formOpen"
				class="form-bg"
				@click="formOpen = false"
			>
			</div>

			<div
				:class="['form', { open: formOpen }]"
				ref="formWrapper"
			>
				<h2 v-if="formOpen" class="form-title">
					<span>Suggest item</span>
					<button
						class="close-icon"
						@click="formOpen = false"
						aria-label="Close suggestion form"
					>
						<font-awesome-icon icon="fa-solid fa-xmark" />
					</button>
				</h2>

				<div v-if="apiError" class="error">
					<font-awesome-icon
						icon="fa-solid fa-face-frown"
						class="icon"
					/>
					<div>Unable to submit</div>
				</div>

				<div v-else-if="submitSuccess" class="success">
					<font-awesome-icon
						icon="fa-solid fa-face-smile"
						class="icon"
					/>
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
								<span>Description</span>
								<input
									v-model="form.desc"
									type="text"
									name="desc"
								>
							</label>
							<label>
								<span>Category</span>
								<select v-model="form.category" name="category">
									<option value="">-- Select category --</option>
									<option
										v-for="cat in categories"
										:key="cat.cat"
										:value="cat.cat"
									>
										{{ cat.cat }}
									</option>
								</select>
							</label>
							<button
								type="submit"
								:disabled="btnDisabled"
							>
								Submit
							</button>
						</form>
					</template>
				</template>
			</div>
		</div>
	</header>
</template>
