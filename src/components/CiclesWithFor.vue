<script setup lang="ts">
  import SectionComponent from './SectionComponent.vue';

  const names = ['Mario', 'Mirko', 'Matteo', 'Michele', 'Mimmo'];
</script>

<template>
  <SectionComponent title="Cicles with FOR">
    <div class="names-container">
      <p v-for="(name, index) in names" :key="index">
        {{ name }}
        <span v-if="name !== 'Mirko'" :class="{ mario: name === 'Mario' }">
          {{ index }}
        </span>
      </p>
    </div>
  </SectionComponent>
</template>
