<script setup lang="ts">
  import { ref } from 'vue';

  import CiclesWithFor from './components/CiclesWithFor.vue';
  import CounterWithIf from './components/CounterWithIf.vue';
  import ToDoList from './components/ToDoList.vue';
  import ToDoListWithRef from './components/ToDoListWithRef.vue';
  import ToDoListWithButton from './components/ToDoListWithButton.vue';
  import ThemeText from './components/ThemeText.vue';
  import MountedUnMounted from './components/MountedUnMounted.vue';
  import CustomButton from './components/CustomButton.vue';
  import SectionComponent from './components/SectionComponent.vue';
  import CardSection from './components/Card/CardSection.vue';
  import WatcherComponent from './components/Watcher/WatcherComponent.vue';
  import WatchEffectComponent from './components/Watcher/WatchEffectComponent.vue';
  import FetchComponent from './components/FetchComponent.vue';

  const toggleMounted = ref<boolean>(true);
</script>

<template>
  <div class="components-container">
    <!-- COMPONENTI -->
    <CounterWithIf />
    <CiclesWithFor />
    <ToDoList />
    <ToDoListWithRef />
    <ToDoListWithButton />

    <!-- PASSAGGIO DI UNA CLASSE DIRETTAMENTE DAL PADRE -->
    <SectionComponent title="Theme Text">
      <ThemeText />
      <ThemeText :class="Math.random() > 0.5 ? 'red' : 'yellow'" />
      <ThemeText class="yellow" />
    </SectionComponent>

    <SectionComponent title="Mounted & unMounted">
      <MountedUnMounted v-if="toggleMounted" />
      <CustomButton
        class="primary"
        :text="toggleMounted ? 'Hide' : 'Show'"
        @click="toggleMounted = !toggleMounted"
        @button-click="console.log(toggleMounted)"
      />
    </SectionComponent>

    <!-- CARD -->
    <CardSection />

    <!-- WATCHERS -->
    <WatcherComponent />
    <WatchEffectComponent />

    <!-- FETCH -->
    <FetchComponent />
  </div>
</template>

<style scoped lang="scss">
  @import './scss/includes.scss';

  //UTILIZZO DI DEEP()
  /* .components-container {
    &:deep(.section-component) {
      //STYLE
    }
  } */
</style>
