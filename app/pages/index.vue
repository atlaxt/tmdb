<script setup lang="ts">
definePageMeta({ name: 'home' })

const { data: moviesData } = useDiscover('movie', 1)
const { data: showsData } = useDiscover('tv', 1)
</script>

<template>
  <div class="w-full h-full flex flex-col justify-around">
    <div class="w-full flex flex-row overflow-x-auto gap-4 p-2">
      <MediaCard
        v-for="movie in moviesData?.results"
        :key="movie.id"
        :media="movie"
      />
    </div>
    <div class="w-full flex flex-row overflow-x-auto gap-4 p-2">
      <MediaCard
        v-for="show in showsData?.results"
        :key="show.id"
        :media="show"
      />
    </div>
  </div>
</template>
