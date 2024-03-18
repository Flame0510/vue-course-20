<script setup lang="ts">
  import { reactive, ref, watchEffect, watchPostEffect } from 'vue';
  import SectionComponent from '../SectionComponent.vue';

  const text = ref<string>('');
  const text2 = ref<string>('');

  const obj = reactive({
    text: '',
    text2: ''
  });

  const unwatch = //OPZIONALE SE SI DEVE DISATTIVARE IL WATCHEFFECT
    watchEffect(() => {
      //"text.value" VIENE AGGIORNATO QUANDO VIENE MODIFICATO "obj.text"
      text.value = obj.text;
      console.log('obj.text:', obj.text);
    });

  //unwatch() //IL WATCHEFFECT NON VIENE PIU' TRIGGERATO (SI PUO' UTILIZZARE ANCHE SUL WATCH)

  //VIENE ESEGUITO DOPO L'AGGIORNAMENTO DEL DOM - E' LA STESSA COSA DI UTILIZZARE (flush: 'post')
  watchPostEffect(() => console.log('eseguito dopo', text.value));
</script>

<template>
  <SectionComponent title="WATCH EFFECT">
    <h2>WATCH DEL "REF"</h2>
    <input v-model="text" placeholder="text" />
    <input v-model="text2" placeholder="text2" />

    <h2>WATCH DEL "REACTIVE"</h2>
    <input v-model="obj.text" placeholder="text" />
    <input v-model="obj.text2" placeholder="text2" />
  </SectionComponent>
</template>
