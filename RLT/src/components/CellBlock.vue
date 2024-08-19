<template>
  <section>
    <div class="container">
      <Cell 
      v-for="i in 25"
      :key="i"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Cell from './Cell.vue';


</script>

<style lang="scss" scoped>
 .container {
  background-color: rgba(77, 77, 77, 1);

  width: 525px;
  height: 500px;

  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);

  border: 1px solid rgba(77, 77, 77, 1);
  border-radius: 12px ;

  gap: 1px;
 }
</style>