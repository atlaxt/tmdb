<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
  name: 'media-list',
})

const type = computed(() => useRoute().params.type as MediaType || 'movie')
</script>

<template>
  <div>
    media type: {{ type }}
  </div>
</template>
