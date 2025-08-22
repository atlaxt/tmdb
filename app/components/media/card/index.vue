<script setup lang="ts">
const props = defineProps<{
  media: Media
}>()

const type = ref<MediaType>()
onMounted(() => {
  type.value = props.media.title ? 'movie' : 'tv'
})
</script>

<template>
  <div
    class="min-w-[180px] max-w-[180px] cursor-pointer"
    @click="useRouter().push({ name: 'media-detail', params: { type, id: media.id } })"
  >
    <div class="relative">
      <img
        :src="media.poster_path ? `https://image.tmdb.org/t/p/w300${media.poster_path}` : ''"
        alt=""
        class="w-full h-64 object-cover"
      >
      <div class="absolute bottom-0 right-0 dark:bg-secondary-900 bg-white p-1">
        <media-card-vote-average :vote-average="media.vote_average" />
      </div>
    </div>
    <div class="pt-2">
      <div class="font-bold text-sm" :title="media.title || media.name">
        {{ media.title || media.name }}
      </div>
      <div class="text-sm text-gray-400">
        {{ media.release_date || media.first_air_date || '-' }}
      </div>
    </div>
  </div>
</template>
