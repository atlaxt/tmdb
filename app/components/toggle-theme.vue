<script setup lang="ts">
const mounted = ref(false)
onMounted(() => mounted.value = true)
</script>

<template>
  <UButton v-if="mounted" :icon="isDark ? 'lucide:sun' : 'lucide:moon'" variant="link" size="sm" @click="toggleTheme" />
</template>
