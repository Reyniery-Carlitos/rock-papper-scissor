<script setup lang="ts">
defineProps<{
  color1: string,
  color2: string
}>()
</script>

<template>
  <div
    class="h-32 w-32 flex justify-center items-center rounded-full"
    :style="{background: `radial-gradient(circle, ${color1}, ${color2})`}"
  >
    <div
      class="p-1 bg-white w-24 h-24 flex justify-center items-center rounded-full"
    >
      <slot />
    </div>
  </div>
</template>
