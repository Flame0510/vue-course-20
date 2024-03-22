<script setup lang="ts">
  import { watchEffect } from 'vue';
  import SectionComponent from './SectionComponent.vue';

  import { useFetch } from '@/utils/fetch';
  import { loader } from '../../store';

  //UTILIZZO DI FETCH (CLASSICO)
  /* const data = ref<[]>([]);
  const error = ref(); */

  //UTILIZZO DI AWAIT ANNIDATI (NON CONSIGLIATO)
  /* data.value = await (
    await fetch('https://jsonplaceholder.typicode.com/todos')
  ).json(); */

  //UTILIZZO COMPLETO CON TRY - CATCH
  /* try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    data.value = await res.json();
  } catch (err) {
    console.error(err);
    error.value = err;
  } */

  //UTILIZZO COMPLETO CON THEN - CATCH
  /* await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err)); */

  //UTLIZZO DELLA UTIL "useFetch" CHE ABBIAMO CREATO IN PRECEDENZA
  const { isFetching, data, status, error } = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  //LOADER DINAMICO SULLO STATE
  //watchEffect(() => loader.setLoading(isFetching.value));

  //UTILIZZO DI "useFetch" PRESO DALLA LIBRERIA "VueUse" (IL VALUE E' UN PARSED ARRAY [STRING])
  //const { isFetching, data, error } = await useFetch('https://jsonplaceholder.typicode.com/todos');
</script>

<template>
  <SectionComponent title="CHIAMATE API (FETCH)">
    <!-- LOADING TRAMITE "isFetching" -->
    <p v-if="isFetching">Loading...</p>

    <!-- IL TEMPLATE SI UTILIZZA PER CONTENERE DEGLI ELEMENTI HTML IN MODO DINAMICO E PER POTER UTILIZZARE CONTEMPORANEAMENTE PIU' DIRETTIVE (V-IF, V-FOR, ECC...) -->
    <template v-if="!error">
      <p v-if="!isFetching">Status: {{ status }}</p>

      <p v-for="({ title }, index) in data" :key="index">
        {{ index }} - {{ title }}
      </p>
    </template>

    <!-- VIENE STAMPATO IN CASO DI ERRORE (500 - SERVER ERROR) -->
    <p v-else>ERRORE</p>
  </SectionComponent>
</template>
@/utils/utils
