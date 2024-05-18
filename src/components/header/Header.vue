<script setup lang="ts">
import LogoBonus from '../icons/LogoBonus.vue';
import { useGame } from '../../stores/game';
import { storeToRefs } from 'pinia';

const gameStore = useGame()
const { userScore } = storeToRefs(gameStore)
</script>

<template>
  <header class="flex justify-between items-center px-8 rounded-3xl border-2 border-white w-5/6 h-36 sm:w-3/6">
    <logo-bonus />

    <div class="flex flex-col justify-center items-center bg-white h-4/5 w-40 rounded-xl">
      <span class="text-xl"> SCORE </span>
      <h1 class="text-7xl font-bold"> {{ userScore }} </h1>
    </div>
  </header>
</template>