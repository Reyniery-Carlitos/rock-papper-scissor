<script setup lang="ts">
import { useGame } from "../../stores/game";
import { storeToRefs } from "pinia";
import IconSlot from "../main/IconSlot.vue";
import styles from "../../consts/styles.json";
import BgLizard from "../icons/BgLizard.vue";
import BgPapper from "../icons/BgPapper.vue";
import BgRock from "../icons/BgRock.vue";
import BgScissor from "../icons/BgScissor.vue";
import BgSpock from "../icons/BgSpock.vue";
import Gradient from "./Gradient.vue";
import { IStyles } from "../../interfaces/game";
import { useRouter } from "vue-router";

const router = useRouter();
const gameStore = useGame();
const { userOptionSelected, pcOptionSelected, winner } = storeToRefs(gameStore);

const stylesOptions: Record<string, IStyles> = {
  ...styles,
};

function start() {
  gameStore.selectPcOption(null);

  router.push("/");
}
</script>

<template>
  <div class="w-4/6 grid grid-cols-3 place-items-center">
    <div
      v-if="userOptionSelected"
      class="flex flex-col gap-10 justify-center items-center relative"
    >
      <h3 class="text-3xl text-white font-bold uppercase z-10">You Picked</h3>
      <icon-slot
        class="z-10"
        :color1="stylesOptions[userOptionSelected].color1"
        :color2="stylesOptions[userOptionSelected].color2"
      >
        <bg-spock v-if="userOptionSelected === 'spock'" />
        <bg-lizard v-if="userOptionSelected === 'lizard'" />
        <bg-papper v-if="userOptionSelected === 'papper'" />
        <bg-scissor v-if="userOptionSelected === 'scissor'" />
        <bg-rock v-if="userOptionSelected === 'rock'" />
      </icon-slot>

      <gradient class="-top-11" v-if="winner === 'user'" />
    </div>

    <div class="w-4/6 flex flex-col gap-5 items-center">
      <h3 class="text-7xl font-bold text-white uppercase">
        {{ winner === "draw" ? "Draw" : winner === "user" ? "You won" : "You lose" }}
      </h3>
      <button
        class="px-10 py-2 w-full uppercase font-bold bg-white rounded-md"
        @click="start"
      >
        Play again
      </button>
    </div>

    <div
      v-if="pcOptionSelected"
      class="flex flex-col gap-10 justify-center items-center relative"
    >
      <h3 class="text-3xl text-white font-bold uppercase z-10">
        The House Picked
      </h3>
      <icon-slot
        class="z-10"
        :color1="stylesOptions[pcOptionSelected].color1"
        :color2="stylesOptions[pcOptionSelected].color2"
      >
        <bg-spock v-if="pcOptionSelected === 'spock'" />
        <bg-lizard v-if="pcOptionSelected === 'lizard'" />
        <bg-papper v-if="pcOptionSelected === 'papper'" />
        <bg-scissor v-if="pcOptionSelected === 'scissor'" />
        <bg-rock v-if="pcOptionSelected === 'rock'" class="z-10" />
      </icon-slot>

      <gradient class="-top-11" v-if="winner === 'pc'" />
    </div>
  </div>
</template>
