<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import SectionComponent from './SectionComponent.vue';

  const list = ref<string[]>([]);

  const input = ref<HTMLInputElement | null>(null);

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

  onMounted(() => {
    //FOCUS SULL'INPUT ALL'onMounted
    input.value?.focus();

    //PRENDERE L'ELEMENTO TRAMITE "ref" E STAMPARNE IL VALORE
    console.log('Input tramite ref', input.value?.value);

    //PRENDERE L'ELEMENTO TRAMITE "querySelector" E STAMPARNE IL VALORE
    console.log(
      'Input tramite querySelector',
      (document.querySelector('#input') as HTMLInputElement).value
    );
  });
</script>

<template>
  <SectionComponent title="TO DO LIST WITH REF">
    <div class="list-container">
      <p v-for="(element, index) in list" :key="index">
        {{ element }}
      </p>
    </div>

    <input @change="handleChange" ref="input" value="ciao" id="input" />
  </SectionComponent>
</template>
