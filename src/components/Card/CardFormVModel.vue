<script setup lang="ts">
  import { reactive } from 'vue';
  import CustomButton from '../CustomButton.vue';
  import type { CardType } from './CardSection.vue';
  import CustomInput from '../CustomInput.vue';

  const emit = defineEmits(['addCard']);

  //IL REACTIVE E' CONSIGLIATO QUANDO SI UTLIZZA UN OGGETTO E CREA UN REF PER OGNI CHIAVE DELL'OGGETTO (DA USARE CON PRUDENZA)
  const card: CardType = reactive({
    img: '',
    title: '',
    description: '',
    cta: '',
    url: ''
  });

  //UTILIZZO DI keyof
  type CardTypeKeys = keyof CardType;
  //CREA UN TYPO CHE CONTIENE TUTTE LE CHIAVI DELL'OGGETTO
  //type CardTypeKeys = 'img' | 'title' | 'description' | 'cta' | 'url';

  const handleSubmit = () => {
    //UTILIZZARE IL VERBO MODIFICATORE "prevent" PERMETTE DI NON UTLIZZARE LA SINTASSI CLASSICA DEL "preventDefault()"
    //event.preventDefault();

    //EMETTIAMO L'OGGETTO "card" AL PADRE E UTILIZZIAMO LO SPREAD OPERATOR PER CREARE UNA COPIA DELL'OGGETTO CARD (E NON IL RIFERIMENTO) DA AGGIUNGERE ALL'ARRAY "cards" DEL PADRE
    emit('addCard', { ...card });

    //ANDIAMO A RESETTARE IL VALORE DI OGNI INPUT
    /* card.img = '';
    card.title = '';
    card.description = '';
    card.cta = '';
    card.url = ''; */

    //INIZIALIZZA TUTTI I VALORI DI "card" ED E' IL CORRISPETTIVO DEL CODICE PRECEDENTE
    Object.keys(card).forEach((inputName: string) => (card[inputName as CardTypeKeys] = ''));
  };
</script>

<template>
  <!-- UTILIZZIAMO IL VERBO MODIFICATORE "prevent" PER PREVENIRE IL RELOAD DELLA PAGINA -->
  <form class="form-container" @submit.prevent="handleSubmit">
    <h2>CARD FORM WITH V-MODEL</h2>

    <input type="text" class="form-input" placeholder="Immagine" v-model="card.img" required />
    <input type="text" class="form-input" placeholder="Title" v-model="card.title" required />
    <input type="text" class="form-input" placeholder="Description" v-model="card.description" required />
    <input type="text" class="form-input" placeholder="CTA" v-model="card.cta" />
    <input type="text" class="form-input" placeholder="Url" v-model="card.url" />

    <!-- UTILIZZO CON IL COMPONENTE  "CustomInput" -->
    <!-- <CustomInput type="text" v-model="card.img" class="form-input" placeholder="immagine" required /> -->

    <CustomButton type="submit" text="Aggiungi Card" />
  </form>
</template>

<style scoped lang="scss">
  @import '../../scss/includes.scss';

  .form-container {
    @include flex($flex-direction: column);

    gap: rem(8);

    width: rem(300);

    margin-bottom: rem(16);
  }
</style>
