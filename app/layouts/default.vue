<template>
  <div class="flex flex-col min-h-screen pt-16">
    <!-- Sabit Header -->
    <app-header class="fixed top-0 left-0 w-full z-50" />

    <!-- Ana içerik -->
    <div class="flex-1 flex flex-col h-full">
      <slot />
    </div>

    <!-- Scroll sonunda görünen Footer -->
    <app-footer class="mt-auto" />
  </div>
</template>

<style>
div {
  font-family: Inter, sans-serif;
}
</style>
