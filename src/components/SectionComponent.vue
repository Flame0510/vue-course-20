<script setup lang="ts">
  defineProps({
    title: String
  });
</script>

<template>
  <section class="section-component">
    <h1>{{ title }}</h1>

    <!-- ELEMENTO "JOLLY" DI HTML CHE VIENE SOSTITUITO CON IL CONTENUTO DEL COMPONENT -->
    <slot />
  </section>
</template>

<style scoped lang="scss">
  .section-component {
    &:not(:first-child) {
      margin-top: 16px;

      padding-top: 16px;

      border-top: 1px solid #fff;
    }
  }
</style>
