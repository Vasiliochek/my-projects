<template>
  <div class="not-found-container">
    <h2 class="not-found-title">404</h2>
    <p class="not-found-descr">Page not found!</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px;
}

.not-found-title {
  font-size: 55px;
}
.not-found-descr {
  font-size: 45px;
}
</style>