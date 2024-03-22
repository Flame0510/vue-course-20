<script setup lang="ts">
  import { RouterLink } from 'vue-router';

  import { routes } from '@/router/index';
</script>

<template>
  <nav class="navbar-container">
    <RouterLink
      v-for="({ path, name }, index) in routes"
      :key="index"
      :to="path"
      class="navbar-link"
      activeClass="active"
    >
      <!-- CAPITALIZE IN JAVASCRIPT -->
      <!-- {{ name[0].toUpperCase() + name.substring(1, name.length) }} -->
      {{ name }}
    </RouterLink>

    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/components">Components</RouterLink>
    <RouterLink to="/cards">Cards</RouterLink> -->
  </nav>
</template>

<style scoped lang="scss">
  @import '@/scss/includes.scss';

  .navbar-container {
    @include flex(space-around, $flex-wrap: wrap);

    gap: rem(16);

    margin-bottom: rem(16);

    background: rgba(#333, 0.5);
    backdrop-filter: blur(rem(2));

    box-shadow: 0 0 rem(12) hsla(160, 100%, 37%, 1);

    padding: rem(8);

    border: rem(1) solid rgba(#fff, 0.2);
    border-radius: rem(8);

    position: sticky;
    top: rem(16);
    left: 0;

    .navbar-link {
      color: #fff;
      background: none;

      text-decoration: none;
      text-transform: capitalize;

      transition: $transition;

      &:hover,
      &.active {
        color: hsla(160, 100%, 37%, 1);
      }
    }
  }
</style>
