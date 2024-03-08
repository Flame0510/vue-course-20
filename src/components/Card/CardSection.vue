<script setup lang="ts">
  import SectionComponent from '../SectionComponent.vue';
  import CardComponent from './CardComponent.vue';
  import CardForm from './CardForm.vue';
  import CardFormVModel from './CardFormVModel.vue';

  import { ref } from 'vue';

  export type CardType = {
    img: string;
    title: string;
    description: string;
    cta?: string;
    url?: string;
  };

  const cards = ref<CardType[]>([
    {
      img: 'https://images.ctfassets.net/wn7ipiv9ue5v/573sV0kiTALMbBfR1vDfTm/fcd4104d2500ccf296c2c7ad1782ebce/GTAIV_Hero_Character_1920x1080.jpg?w=&h=630&fm=&q=',
      title: 'GTA IV',
      description: 'GTA IV besta game eveerrererjererererere!!!!!'
    },
    {
      img: 'https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
      title: 'GTA V',
      description: 'GTA V besta game eveerrererjererererere!!!!!'
    },
    {
      img: 'https://images.everyeye.it/img-cover/gta-6-v19-31349.jpg',
      title: 'GTA VI',
      description: 'GTA VI besta game eveerrererjererererere!!!!!'
    }
  ]);

  const handleAddCard = (card: CardType) => cards.value.push(card);
</script>

<template>
  <SectionComponent title="CARDS">
    <!-- CARD FORM CLASSICO -->
    <CardForm @add-card="handleAddCard" />

    <!-- CARD FORM CON V-MODEL (CONSIGLIATO) -->
    <CardFormVModel @add-card="handleAddCard" />

    <div class="cards-container">
      <!-- UTILIZZIAMO IL TAG "template" PER CICLARE GLI ELEMENTI A PARTE (DI SOLITO SI UTILIZZA PER UTILIZZARE PIU' DIRETTIVE INSIEME - ES. V-FOR E V-IF INSIEME) -->
      <template v-for="({ img, title, description, cta, url }, index) in cards" :key="index">
        <CardComponent :img="img" :title="title" :description="description" :cta="cta" :url="url" />
      </template>
    </div>
  </SectionComponent>
</template>

<style scoped lang="scss">
  @import '../../scss/includes.scss';

  .cards-container {
    @include flex($flex-wrap: wrap);

    gap: rem(16);
  }
</style>
