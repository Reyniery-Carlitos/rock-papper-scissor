<script setup lang="ts">
import ModalRules from "../modals/ModalRules.vue";
import { ref, Ref } from "vue";

const showModal: Ref<boolean> = ref(false);

function toggleModal(val: boolean) {
  showModal.value = val;
}
</script>
<template>
  <div class="flex justify-center w-3/6 h-10 sm:justify-end">
    <span
      class="text-white font-semibold border-2 px-8 py-1 rounded-lg cursor-pointer"
      @click="toggleModal(true)"
    >
      RULES
    </span>
  </div>

  <modal-rules v-if="showModal" :toggleModal="toggleModal" />
</template>
