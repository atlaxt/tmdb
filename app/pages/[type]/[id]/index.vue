<script setup lang="ts">
definePageMeta({
  name: 'media-detail',
})
</script>

<template>
  <div>
    {{ useRoute().params.id }}
  </div>
</template>
