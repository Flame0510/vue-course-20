<script setup lang="ts">
  import { ref } from 'vue';

  import CiclesWithFor from '@/components/CiclesWithFor.vue';
  import CounterWithIf from '@/components/CounterWithIf.vue';
  import ToDoList from '@/components/ToDoList.vue';
  import ToDoListWithRef from '@/components/ToDoListWithRef.vue';
  import ToDoListWithButton from '@/components/ToDoListWithButton.vue';
  import ThemeText from '@/components/ThemeText.vue';
  import MountedUnMounted from '@/components/MountedUnMounted.vue';
  import CustomButton from '@/components/CustomButton.vue';
  import SectionComponent from '@/components/SectionComponent.vue';

  const toggleMounted = ref<boolean>(true);
</script>

<template>
  <h1>Components</h1>

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
</template>
