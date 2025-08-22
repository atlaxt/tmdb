<script setup lang="ts">
const props = defineProps<{
  voteAverage: number
}>()

const style = computed(() => {
  return {
    width: `${(props.voteAverage ?? 0) * 10}%`,
  }
})
</script>

<template>
  <div class="relative w-21">
    <div class="absolute inset-0 overflow-hidden z-10" :style="style">
      <div class="flex w-max">
        <UIcon v-for="i in 5" :key="i" class="text-primary-400" name="ic:baseline-star" />
      </div>
    </div>

    <div class="flex">
      <UIcon
        v-for="i in 5" :key="i"
        class="dark:text-secondary-500 text-secondary-300"
        name="ic:baseline-star-border"
      />
    </div>
  </div>
</template>
