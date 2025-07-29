<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
  name: 'media-list',
})

const route = useRoute()
const type = computed(() => (route.params.type as MediaType))

const { data } = useDiscover(type.value, 1)
</script>

<template>
  <div class="w-full h-full flex flex-wrap justify-center gap-4">
    <MediaCard
      v-for="media in data?.results"
      :key="media.id"
      class="flex-1"
      :media="media"
      @click="useRouter().push({ name: 'media-detail', params: { id: media.id } })"
    />
  </div>
</template>
