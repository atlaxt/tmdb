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
  <div class="w-full h-full flex flex-col mt-12">
    <div class="w-full flex flex-row overflow-x-auto gap-4 p-2">
      <MediaCard
        v-for="media in data?.results"
        :key="media.id"
        :media
        @click="navigateTo({ name: 'media-detail', params: { id: media.id } })"
      />
    </div>
  </div>
</template>
