<script setup lang="ts">
  const names = ['Mario', 'Mirko', 'Matteo', 'Michele', 'Mimmo'];
</script>

<template>
  <section class="component">
    <h1>Cicles with FOR</h1>

    <div class="names-container">
      <p v-for="(name, index) in names" :key="index">
        {{ name }}
        <span v-if="name !== 'Mirko'" :class="{ mario: name === 'Mario' }">
          {{ index }}
        </span>
      </p>
    </div>
  </section>
</template>
