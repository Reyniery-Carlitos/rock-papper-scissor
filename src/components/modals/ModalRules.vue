<script setup lang="ts">
import CloseIcon from '../icons/CloseIcon.vue';
import RulesBonus from '../icons/RulesBonus.vue';

defineProps<{
  toggleModal: (val: boolean) => void
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center absolute w-full h-full top-0 bg-black/25">
    <div class="flex flex-col items-center justify-center gap-3 py-8 rounded-lg bg-gray-100 w-full h-full sm:w-[400px] sm:h-auto">
      <div class="w-full flex justify-between items-center px-5">
        <h2 class="text-3xl font-bold text-gray-600"> RULES </h2>
        <close-icon @click="toggleModal(false)" />
      </div>
      <rules-bonus />
    </div>
  </div>
</template>