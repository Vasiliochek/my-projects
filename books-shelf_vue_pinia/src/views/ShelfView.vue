<template>
  <div class="books-container">
  <h2 v-if="userStatus.booksOnShelf === 0">No books here? Just press "add to shelf", in "Books" link upper!</h2>
    <ShelfCard class="onShelf" v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script setup lang="ts">
import ShelfCard from '@/components/ShelfCard.vue';
import { ref} from 'vue';
import { getBooks } from '@/stores/books';
import { storeToRefs } from 'pinia';

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
.onShelf {
  background-color: rgba(1, 126, 199, 0.753);
}
</style>