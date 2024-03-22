<script setup lang="ts">
  import { watch } from 'vue';
  import { loader } from '../../store';

  import router from '@/router';

  watch(
    router.currentRoute,
    () => {
      loader.setLoading(true);

      setTimeout(() => loader.setLoading(false), 1000);
    },
    {
      immediate: true
    }
  );
</script>

<template>
  <!-- FADE CON LE CLASSI -->
  <!-- <div
    class="loader-container"
    :class="{ hide: !loader.loading }"
  > -->
  <div class="loader-container">
    <Transition>
      <div class="loader-content" v-if="loader.loading">
        <p class="loader-message">Loading...</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
  @import '@/scss/includes.scss';

  .loader-container {
    //CLASSI DEL COMPONENTE Transition.
    //RIFERIMENTO AL SEGUENTE LINK: "https://it.vuejs.org/guide/built-ins/transition.html#the-transition-component"
    .v-enter-from,
    .v-leave-to {
      //USCITA VERSO L'ALTO
      transform: translateY(-100%);
    }

    .loader-content {
      @include flex(center, center);

      width: 100%;
      height: 100%;

      color: #fff;
      background: rgba(#000, 0.8);
      backdrop-filter: blur(rem(2));

      position: fixed;
      top: 0;
      left: 0;

      transition: $transition;

      z-index: 1;

      /*---FADE CON LE CLASSI---*/
      opacity: 1;
      visibility: visible;

      &.hide {
        opacity: 0;
        visibility: hidden;
      }
      /*-----------------------*/

      .loader-message {
        font-size: rem(32);
      }
    }
  }
</style>
