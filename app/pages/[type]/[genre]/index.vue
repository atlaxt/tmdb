<script setup lang="ts">
definePageMeta({
  name: 'media-genre-list',
})
const route = useRoute()
const _type = route.params.type as MediaType
const _genre = route.params.genre as string | number
const { data } = useDiscover(_type, 1)

onMounted(() => {

})
</script>

<template>
  <div class="w-full h-full flex flex-wrap justify-center gap-4">
    <MediaCard
      v-for="media in data?.results"
      :key="media.id"
      class="flex-1"
      :media="media"
    />
  </div>
</template>
