<script setup lang="ts">
  import { ref } from 'vue';

  const count = ref<number>(0);

  const handleClick = () => {
    count.value++;
    console.log(count.value);
  };
</script>

<template>
  <section class="component">
    <h1>Counter width IF: {{ count }}</h1>
    <button @click="handleClick">Click Me!</button>

    <p v-if="!count">{{ count }} è 0</p>
    <p v-else-if="count > 5">{{ count }} è maggiore di 5</p>
    <p v-else>{{ count }} è minore di 5</p>
  </section>
</template>
