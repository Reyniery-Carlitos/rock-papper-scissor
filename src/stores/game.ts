import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { Players } from "../interfaces/game";
import data from '../consts/data.json'
import { IWinnerArray } from "../interfaces/game";

const WinnerOptions: Record<string, IWinnerArray> = {
  ...data
}

export const useGame = defineStore('game', () => {
  const userOptionSelected: Ref<string | null> = ref('rock')
  const pcOptionSelected: Ref<string | null> = ref(null)

  const userScore: Ref<number> = ref(0)
  const winner: Ref<Players | null> = ref('user')

  function selectUserOption(val: string) {
    userOptionSelected.value = val
  }

  function incrementScore() {
    userScore.value++
  }

  function validateWinner () {
    if (pcOptionSelected && userOptionSelected) {
      if (WinnerOptions[userOptionSelected.value as string].win.includes(pcOptionSelected.value as string)) {
        incrementScore()
        winner.value = 'user'
      } else if (WinnerOptions[pcOptionSelected.value as string].win.includes(userOptionSelected.value as string)) {
        winner.value = 'pc'
      } else {
        winner.value = 'draw'
      }
    }
  }

  function selectPcOption(val: string | null) {
    pcOptionSelected.value = val

    if (val) validateWinner()
  }

  return { userOptionSelected, pcOptionSelected, winner, userScore, selectUserOption, selectPcOption }
})