<script setup lang="ts">
definePageMeta({
  name: 'media-detail',
})
const route = useRoute()
const _type = route.params.type as MediaType
const _id = route.params.id as string | number
const { data } = useMedias(_type, _id)
</script>

<template>
  <div>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>
