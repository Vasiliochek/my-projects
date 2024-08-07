<template>
  <div class="books-container">
    <h2 v-if="userStatus.readedBooks === 0">No books here? Mark books as "already readed", in "Books" link upper!</h2>
    
    <ReadedCard class="readed" v-for="book in books" :key="book.id" :book="book"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getBooks } from '@/stores/books';
import { storeToRefs } from 'pinia';
import ReadedCard from '@/components/ReadedCard.vue';

const store = storeToRefs(getBooks())
const books = ref(store.books)
const userStatus = ref(store.userStatus)
</script>

<style scoped>
.books-container {
  display: flex;
  flex-wrap: wrap;

  row-gap: 10px ;
  column-gap: 10px;
}
.readed {
  background-color: rgba(0, 184, 122, 0.596);
}
</style>