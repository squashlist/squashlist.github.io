<script setup>
defineProps({
    visits: { type: Number, default: 0 }
})
</script>

<template>
    <footer class="footer">
        <img src="//nuvmo.github.io/media/img/old-dude.jpg" alt="Nuvmo logo" />
        a <a href="//nuvmo.github.io" rel="noopener noreferrer">Nuvmo</a> project
        <span v-if="visits > 0" class="visits">· {{ visits.toLocaleString() }} visits</span>
    </footer>
</template>
