<template>
  <div class="flex flex-col fixed left-0 top-0 w-screen h-dvh">
    <app-header />
    <div class="w-full h-full">
      <slot />
    </div>
  </div>
</template>

<style>
div {
  font-family: Inter, sans-serif;
}
</style>
