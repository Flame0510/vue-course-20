<script setup lang="ts">
  import { computed, reactive, ref, watch } from 'vue';
  import SectionComponent from '../SectionComponent.vue';

  const text = ref<string>('');
  const text2 = ref<string>('');

  const obj = reactive({
    text: '',
    text2: ''
  });

  /*---REF---*/
  //WATCH DEL SINGOLO REF
  watch(text, (t: string) => console.log('text:', t), {
    //immediate: true, //VIENE ESEGUITO ALL'ONMOUNTED
    //once: true //VIENE ESEGUITO SOLO UNA VOLTA
    //deep: true //FORZA IN UN WATCHER AVANZATO (USARE CON CAUTELA)
    //flush: 'post' //LA CALLBACK VIENE ESEGUITA DOPO L'AGGIORNAMENTO DEL DOM, MA NORMALMENTE VIENE ESEGUITA PRIMA
  });
  const unwatch = //OPZIONALE SE SI DEVE DISATTIVARE IL WATCHER
    watch(text2, (t: string) => console.log('text2:', t));

  //unwatch() //IL WATCHER NON VIENE PIU' TRIGGERATO

  //WATCH CON VALORE PRECEDENTE
  /* watch(
    text,
    (
      text, //VALORE CORRENTE
      oldText // VALORE PRECEDENTE
    ) => console.log('text: ' + text + '\noldText: ' + oldText)
  ); */

  //WATCH DI PIU' REF CONTEMPORANEAMENTE
  //watch([text, text2], (textArray: string[]) => console.log(textArray[0], textArray[1]));

  /*---REACTIVE---*/
  //WATCH DELLA SINGOLA CHIAVE DEL REACTIVE CON IL GETTER (CONSIGLIATO)
  watch(
    () => obj.text, //TEXT
    (text: string) => console.log('obj.text:', text)
  );
  watch(
    () => obj.text2, //TEXT2
    (text: string) => console.log('obj.text2:', text)
  );

  //WATCH DELLE SINGOLE CHIAVI DEL REACTIVE CON IL GETTER (FOLLIA DI STEFANO, MA UN ALTRO MODO)
  //watch([() => obj.text, () => obj.text2], (text) => console.log(text));

  //WATCH DEL REACTIVE O "WATCHER AVANZATO" (DA USARE CON PRUDENZA)
  //watch(obj, (obj) => console.log(obj));

  /*---COMPUTED---*/
  //LA COMPUTED E' UN REF CHE TIENE TRACCIA AUTOMATICAMENTE DELLE SUE DIPENDENZE E AGGIORNA IL SUO VALORE
  const computedText = computed(
    () => 'text: ' + text.value + '<br>text2: ' + text2.value
  );
</script>

<template>
  <SectionComponent title="WATCHER">
    <h2>WATCH DEL "REF"</h2>
    <input v-model="text" placeholder="text" />
    <input v-model="text2" placeholder="text2" />

    <h2>WATCH DEL "REACTIVE"</h2>
    <input v-model="obj.text" placeholder="obj.text" />
    <input v-model="obj.text2" placeholder="obj.text2" />

    <h2>WATCH DEL "COMPUTED"</h2>
    <p v-html="computedText" />
  </SectionComponent>
</template>

<style scoped lang="scss"></style>
