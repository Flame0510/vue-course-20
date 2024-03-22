<script setup lang="ts">
  import LoaderComponent from '@/components/LoaderComponent.vue';
  import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<template>
  <LoaderComponent />
  <NavbarComponent />
  <RouterView />
</template>

<style scoped lang="scss">
  @import './scss/includes.scss';
</style>
