<script setup lang="ts">
  import CiclesWithFor from './components/CiclesWithFor.vue';
  import CounterWithIf from './components/CounterWithIf.vue';
  import ToDoList from './components/ToDoList.vue';
  import ThemeText from './components/ThemeText.vue';
</script>

<template>
  <div class="components-container">
    <!-- COMPONENTI -->
    <CounterWithIf />
    <CiclesWithFor />
    <ToDoList />

    <!-- PASSAGGIO DI UNA CLASSE DIRETTAMENTE DAL PADRE -->
    <ThemeText />
    <ThemeText :class="Math.random() > 0.5 ? 'red' : 'yellow'" />
    <ThemeText class="yellow" />
  </div>
</template>

<style scoped lang="scss">
  .components-container {
    &:deep(.component) {
      &:not(:last-child) {
        margin-bottom: 16px;

        padding-bottom: 16px;

        border-bottom: 1px solid #fff;
      }
    }
  }
</style>
