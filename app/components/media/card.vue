<script setup lang="ts">
defineProps<{
  media: Media
  mediaType?: MediaType
}>()
</script>

<template>
  <div
    class="min-w-[180px] max-w-[180px] overflow-hidden cursor-pointer"
    @click="useRouter().push({ name: 'media-detail', params: { type: mediaType, id: media.id } })"
  >
    <img
      :src="media.poster_path ? `https://image.tmdb.org/t/p/w300${media.poster_path}` : ''"
      alt=""
      class="w-full h-64 object-cover"
    >
    <div class="p-3">
      <div class="font-bold text-base truncate" :title="media.title || media.name">
        {{ media.title || media.name }}
      </div>
      <div class="text-sm text-gray-400">
        {{ media.release_date || media.first_air_date || '-' }}
      </div>
    </div>
  </div>
</template>
