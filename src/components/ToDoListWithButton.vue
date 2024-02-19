<script setup lang="ts">
  import { ref } from 'vue';
  import SectionComponent from './SectionComponent.vue';
  import CustomButton from './CustomButton.vue';
  import CustomInput from './CustomInput.vue';

  const list = ref<string[]>([]);

  const inputValue = ref<string>('');

  const handleAdd = () => {
    list.value.push(inputValue.value);

    inputValue.value = '';
  };
</script>

<template>
  <SectionComponent title="TO DO LIST WITH BUTTON">
    <div class="list-container">
      <p v-for="(element, index) in list" :key="index">
        {{ element }}
      </p>
    </div>

    <!-- AGGIORNAMENTO IN TEMPO REALE CLASSICO (INLINE) -->
    <!-- <input 
        @input="(event) => (inputValue = event.target.value)" 
        :value="inputValue" /> -->

    <!-- AGGIORNAMENTO IN TEMPO REALE CLASSICO (CON HANDLE CHANGE)-->
    <!-- <input @input="handleChange" :value="inputValue" /> -->

    <!-- AGGIORNAMENTO IN TEMPO REALE CON V-MODEL (CONSIGLIATO) -->
    <!-- <input v-model="inputValue" /> -->

    <!-- AGGIORNAMENTO IN TEMPO REALE CON V-MODEL ALL'INTERNO DI UN COMPONENTE CUSTOM -->
    <CustomInput v-model="inputValue" :value="inputValue" />

    <CustomButton class="primary" text="Aggiungi elemento" @click="handleAdd" />
  </SectionComponent>
</template>
