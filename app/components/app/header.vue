<script setup lang="ts">
const { data: movieGenres } = useGenre('movie')
const { data: tvGenres } = useGenre('tv')
</script>

<template>
  <header class="w-full py-2 px-3 flex flex-row items-center justify-between h-12 bg-secondary-50 dark:bg-secondary-950">
    <div class="flex flex-row items-center gap-2">
      <UButton
        variant="link"
        label="Home"
        @click="navigateTo({ name: 'home' })"
      />
      <UPopover
        :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8,
        }" mode="hover"
      >
        <UButton
          label="Movies" variant="link"
          @click="navigateTo({ name: 'media-list', params: { type: 'movie' } })"
        />
        <template #content>
          <div class="flex flex-col h-full w-56 overflow-y-auto">
            <UButton
              v-for="genre in movieGenres?.genres"
              :key="genre.id"
              color="neutral"
              :label="genre.name"
              variant="link"
            />
          </div>
        </template>
      </UPopover>
      <UPopover
        :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8,
        }" mode="hover"
      >
        <UButton
          label="TV Shows" variant="link"
          @click="navigateTo({ name: 'media-list', params: { type: 'tv' } })"
        />
        <template #content>
          <div class="flex flex-col h-full w-56 overflow-y-auto">
            <UButton
              v-for="genre in tvGenres?.genres"
              :key="genre.id"
              color="neutral"
              :label="genre.name"
              variant="link"
            />
          </div>
        </template>
      </UPopover>
    </div>
    <ToggleTheme />
  </header>
</template>
