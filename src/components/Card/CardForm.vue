<script setup lang="ts">
  import { reactive } from 'vue';
  import CustomButton from '../CustomButton.vue';
  import type { CardType } from './CardSection.vue';

  const emit = defineEmits(['addCard']);

  //IL REACTIVE E' CONSIGLIATO QUANDO SI UTLIZZA UN OGGETTO E CREA UN REF PER OGNI CHIAVE DELL'OGGETTO (DA USARE CON PRUDENZA)
  //IN QUESTO CASO PUO' ANCHE NON ESSERE UTILIZZATO POICHE' QUESTI DATI NON CI SERVONO ALL'INTERNO DEL template
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

  const handleSubmit = ({ target }: Event) => {
    //UTILIZZARE IL VERBO MODIFICATORE "prevent" PERMETTE DI NON UTLIZZARE LA SINTASSI CLASSICA DEL "preventDefault()"
    //event.preventDefault();

    const data = (target as HTMLFormElement).childNodes as NodeListOf<HTMLInputElement>;

    //ASSEGNAMO AD OGNI ELEMENTO DELL'OGGETTO "card" IL VALORE DELL'INPUT CORRISPONDENTE
    data.forEach(({ name, value }) => (card[name as CardTypeKeys] = value));

    //EMETTIAMO L'OGGETTO "card" AL PADRE E UTILIZZIAMO LO SPREAD OPERATOR PER CREARE UNA COPIA DELL'OGGETTO CARD (E NON IL RIFERIMENTO) DA AGGIUNGERE ALL'ARRAY "cards" DEL PADRE
    emit('addCard', { ...card });

    //ANDIAMO A RESETTARE IL VALORE DI OGNI INPUT
    data.forEach((input) => (input.value = ''));
  };
</script>

<template>
  <!-- UTILIZZIAMO IL VERBO MODIFICATORE "prevent" PER PREVENIRE IL RELOAD DELLA PAGINA -->
  <form class="form-container" @submit.prevent="handleSubmit">
    <h2>CARD FORM</h2>

    <input type="text" name="img" class="form-input" placeholder="Immagine" required />
    <input type="text" name="title" class="form-input" placeholder="Title" required />
    <input type="text" name="description" class="form-input" placeholder="Description" required />
    <input type="text" name="cta" class="form-input" placeholder="CTA" />
    <input type="text" name="url" class="form-input" placeholder="Url" />

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
