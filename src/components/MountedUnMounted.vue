<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';

  onMounted(() => {
    console.log('mounted');
  });

  onUnmounted(() => {
    console.log('unMounted');
  });
</script>

<template>
  <p>Mounted</p>
</template>
