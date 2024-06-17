<template>
  <div class="start-container">
    <h3 class="start-title">Welcome to books shelf, maded on <b>Vue</b>!</h3>
    <p class="start-welcome-descr">Here, you can made your own shelf! Just surf the links at the top! To see more links, just login!</p>
    <p class="start-descr">What you have here (*you need to be loged!):</p>
    <ul class="start-list"> 
      <li class="start-list-item">Add books to your shelf.</li>
      <li class="start-list-item">Save your shelf.</li>
      <li class="start-list-item">Mark books as read.</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.start-title{
font-size: 24px;
}
b {
  color: hsla(160, 100%, 37%, 1);
}
.start-welcome-descr{
  margin-bottom: 15px;
}
.start-list-item::marker{
  color: hsla(160, 100%, 37%, 1);
}
</style>