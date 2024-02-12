<script setup lang="ts">
  import { ref } from 'vue';

  const list = ref<string[]>([]);

  const handleChange = (event: Event) => {
    //DESTRUTTURIAMO 'event' PRENDENDO 'target'
    const { target } = event;

    //CREIAMO UN RIFERIMENTO DI 'target' CHIAMATO 't' FACENDO IL CASTING A 'HTMLInputElement'
    const t = target as HTMLInputElement;

    //DESTRUTTURIAMO 't' PRENDENDO 'value'
    const { value } = t;

    //FACCIAMO UN PUSH DEL VALORE DELL'INPUT ('value') ALL'INTERNO DELL'ARRAY 'list'
    list.value.push(value);

    //INIZIALIZZIAMO IL VALORE DELL'INPUT
    t.value = '';
  };
</script>

<template>
  <section class="component">
    <h1>TO DO LIST</h1>

    <div class="list-container">
      <p v-for="(element, index) in list" :key="index">
        {{ element }}
      </p>
    </div>

    <input @change="handleChange" />
  </section>
</template>
