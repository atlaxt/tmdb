<template>
  <header class="w-full py-2 px-3 flex flex-row items-center justify-between">
    <div class="flex flex-row items-center gap-2">
      <UButton
        label="Home" variant="link"
        @click="navigateTo({ name: 'home' })"
      />
      <UButton
        label="Movies" variant="link"
        @click="navigateTo({ name: 'media-list', params: { type: 'movie' } })"
      />
      <UButton
        label="TV Shows" variant="link"
        @click="navigateTo({ name: 'media-list', params: { type: 'tv' } })"
      />
    </div>
    <UButton :icon="isDark ? 'lucide:sun' : 'lucide:moon'" variant="link" size="sm" @click="toggleTheme" />
  </header>
</template>
