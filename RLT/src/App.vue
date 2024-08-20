<script setup lang="ts">
import LeftBlock from './components/LeftBlock.vue';
import CellTab from './components/CellTab.vue';
import BottomBlock from './components/BottomBlock.vue';
</script>

<template>
  <main class="main">
    <div class="main__container">
    <LeftBlock />
    <CellTab />
    <BottomBlock />
  </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .main__container {
  max-width: 849px;
  max-height: 660px;

  padding: 32px;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
}

</style>
