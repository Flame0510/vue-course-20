<script setup lang="ts">
  defineProps({
    title: String
  });
</script>

<template>
  <section class="section-component">
    <h1 class="section-title">{{ title }}</h1>

    <!-- ELEMENTO "JOLLY" DI HTML CHE VIENE SOSTITUITO CON IL CONTENUTO DEL COMPONENTE -->
    <slot />
  </section>
</template>

<style scoped lang="scss">
  @import '../scss/includes.scss';

  .section-component {
    &:not(:first-child) {
      margin-top: 16px;

      padding-top: 16px;

      border-top: 1px solid #fff;
    }

    .section-title {
      margin-bottom: rem(16);
    }
  }
</style>
