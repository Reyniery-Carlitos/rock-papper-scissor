<script setup lang="ts">
import Header from './components/header/Header.vue';
import RulesButton from './components/buttons/RulesButton.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Header />
  <RouterView />
  <RulesButton />
</template>

<style scoped>
</style>