<script setup lang="ts">
import BgPentagon from "../icons/BgPentagon.vue";
import BgLizard from "../icons/BgLizard.vue";
import BgPapper from "../icons/BgPapper.vue";
import BgRock from "../icons/BgRock.vue";
import BgScissor from "../icons/BgScissor.vue";
import BgSpock from "../icons/BgSpock.vue";
import IconSlot from "./IconSlot.vue";
import styles from "../../consts/styles.json"
import { useRouter } from "vue-router";
import { useGame } from "../../stores/game";

const router = useRouter()
const gameStore = useGame()

function goToMatch(optionSelected: string) {
  gameStore.selectUserOption(optionSelected)
  router.push('/match')
}

</script>

<template>
  <div class="h-full w-5/6 flex flex-col items-center justify-center gap-28">
    <div class="relative">
      <bg-pentagon />

      <IconSlot class="absolute top-11 -right-10" :color1="styles.lizard.color1" :color2="styles.lizard.color2">
        <bg-lizard @click="goToMatch('lizard')" />
      </IconSlot>

      <IconSlot class="absolute -top-11 left-[100px]" :color1="styles.papper.color1" :color2="styles.papper.color2">
        <bg-papper @click="goToMatch('papper')" />
      </IconSlot>

      <IconSlot class="absolute top-11 -left-10" :color1="styles.rock.color1" :color2="styles.rock.color2">
        <bg-rock @click="goToMatch('rock')" />
      </IconSlot>

      <IconSlot class="absolute -bottom-10 left-0" :color1="styles.spock.color1" :color2="styles.spock.color2">
        <bg-spock @click="goToMatch('spock')" />
      </IconSlot>

      <IconSlot class="absolute -bottom-10 right-0" :color1="styles.scissor.color1" :color2="styles.scissor.color2">
        <bg-scissor @click="goToMatch('scissor')" />
      </IconSlot>
    </div>
  </div>
</template>
