<script setup lang="ts">
  //DEFINIAMO LE PROPS
  const { text } = defineProps({
    text: String
  });

  //DEFINIAMO L'EMETTITORE
  const emit = defineEmits(['button-click']);

  //HANDLE CHIAMATO AL CLICK DEL BOTTONE - DOPO 5 SECONDI FA L'EMIT
  const handleClick = () => {
    setTimeout(() => emit('button-click'), 5000);
  };
</script>

<template>
  <button class="custom-button" @click="handleClick">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
  @import '../scss/includes.scss';

  .custom-button {
    border: none;

    padding: rem(4) rem(8);

    &.primary {
      color: $primary;
      background: $background-2;
    }

    &.secondary {
      color: $secondary;
      background: $background-2;
    }
  }
</style>
