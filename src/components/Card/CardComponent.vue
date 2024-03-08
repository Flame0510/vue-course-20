<script setup lang="ts">
  import type { CardType } from './CardSection.vue';

  defineProps<CardType>();
</script>

<template>
  <div class="card-component">
    <img class="card-img" :src="img" :alt="title" />
    <h2>{{ title }}</h2>
    <p class="card-description">{{ description }}</p>
    <a :href="url || 'https://youtu.be/dQw4w9WgXcQ'" _blank="true" class="card-cta">
      {{ cta || 'SCARICA GTA VI GRATIS!!!' }}
    </a>
  </div>
</template>

<style scoped lang="scss">
  @import '../../scss/includes.scss';

  .card-component {
    @include flex(space-between, $flex-direction: column);

    width: 25%;

    margin-bottom: rem(16);

    color: #000;
    background: #ddd;

    padding: rem(16);

    border-radius: rem(8);

    .card-img {
      width: 100%;
      height: 60%;

      border-radius: 8px;

      object-fit: cover;
    }

    .card-description {
      margin-bottom: rem(16);
    }

    .card-cta {
      text-decoration: none;

      color: #fff;
      background: #000;

      padding: rem(16) rem(8);

      border-radius: rem(4);

      text-align: center;

      transition: $transition;

      &:hover {
        background: lighten(#000, 50%);
      }
    }
  }
</style>
