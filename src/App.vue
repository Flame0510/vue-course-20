<script setup lang="ts">
  import CiclesWithFor from './components/CiclesWithFor.vue';
  import CounterWithIf from './components/CounterWithIf.vue';
</script>

<template>
  <div class="components-container">
    <CounterWithIf />
    <CiclesWithFor />
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
