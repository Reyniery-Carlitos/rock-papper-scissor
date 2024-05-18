<script setup lang="ts">
import { useGame } from '../../stores/game';
import { storeToRefs } from 'pinia';
import IconSlot from '../main/IconSlot.vue';
import styles from '../../consts/styles.json'
import BgLizard from '../icons/BgLizard.vue';
import BgPapper from '../icons/BgPapper.vue';
import BgRock from '../icons/BgRock.vue';
import BgScissor from '../icons/BgScissor.vue';
import BgSpock from '../icons/BgSpock.vue';
import { IStyles } from '../../interfaces/game';
import { useRouter } from 'vue-router';

const router = useRouter()
const gameStore = useGame()
const { userOptionSelected, pcOptionSelected } = storeToRefs(gameStore)
const options: String[] = ['rock', 'papper', 'scissor', 'lizard', 'spock'];

const stylesOptions: Record<string, IStyles> = {
  ...styles
}

setTimeout(() => {
  const randomVal = Math.floor(Math.random() * options.length)

  gameStore.selectPcOption(options[randomVal] as string)
  router.push('/winner')
}, 1000)
</script>

<template>
  <div class="w-3/6 grid grid-cols-2 place-items-center">
    <div v-if="userOptionSelected" class="flex flex-col gap-10 justify-center items-center">
      <h3 class="text-3xl text-white font-bold uppercase">You Picked</h3>
      <icon-slot
        :color1="stylesOptions[userOptionSelected].color1"
        :color2="stylesOptions[userOptionSelected].color2"
      >

      <bg-spock v-if="userOptionSelected === 'spock'" />
      <bg-lizard v-if="userOptionSelected === 'lizard'" />
      <bg-papper v-if="userOptionSelected === 'papper'" />
      <bg-scissor v-if="userOptionSelected === 'scissor'" />
      <bg-rock v-if="userOptionSelected === 'rock'" />
      
    </icon-slot>
    </div>

    <div v-if="pcOptionSelected" class="flex flex-col gap-10 justify-center items-center">
      <h3 class="text-3xl text-white font-bold uppercase">The House Picked</h3>
      <icon-slot
        :color1="stylesOptions[pcOptionSelected].color1"
        :color2="stylesOptions[pcOptionSelected].color2"
      >

      <bg-spock v-if="pcOptionSelected === 'spock'" />
      <bg-lizard v-if="pcOptionSelected === 'lizard'" />
      <bg-papper v-if="pcOptionSelected === 'papper'" />
      <bg-scissor v-if="pcOptionSelected === 'scissor'" />
      <bg-rock v-if="pcOptionSelected === 'rock'" />
      
    </icon-slot>
    </div>

    <div v-else class="flex flex-col gap-10 items-center">
      <h3 class="text-3xl text-white font-bold uppercase">The House is picking </h3>

      <div class="animate-pulse bg-gray-200 flex items-center justify-center h-32 w-32 rounded-full">
        <div class="animate-pulse bg-white h-24 w-24 rounded-full">

        </div>
      </div>
    </div>
  </div>
</template>
