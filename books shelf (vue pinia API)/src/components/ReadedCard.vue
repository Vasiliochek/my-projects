<template>
  <div :class="['book']" v-if="book.readed">
    <img :src="book.cover_image" class="book-img-top" alt="book image">
    <div class="book-body">
        <h5 class="book-title">"{{ book.title }}""</h5>
        <p class="book-author">Author: {{ book.author }}</p>
        <p class="book-year">Publication year: {{ book.publication_year }}.</p>
        <p class="book-descr">{{ book.description }}</p>
      <div class="btns-container">
        <button class="delete-btn" @click="deleteFromReaded">Delete from readed</button>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { getBooks } from '@/stores/books';
import type { Book } from '@/types/Book';
import { storeToRefs } from 'pinia';

const prop = defineProps<{book: Book}>()
const booksStore = storeToRefs(getBooks())
const userStatus = booksStore.userStatus

const deleteFromReaded = () => {
prop.book.readed = false
userStatus.value.readedBooks = userStatus.value.readedBooks - 1
getBooks().refreshUserStatus()
getBooks().refreshBooksLocal()
}

</script>

<style>
.book {
  display: flex;
 column-gap: 15px;

  width: 49%;

  border: 1px solid gray;
  border-radius: 8px;

  padding: 10px;
}
.book-img-top {
  height: 100%;
  width: 40%;
}
.book-title {
  margin-bottom: 5px;

  font-size: 20px;
}
.book-author{
  text-align: right;
}
.book-year { 
  margin-bottom: 40px;

  text-align: right;
}
.book-descr{
  margin-bottom: 110px;
  max-width: 340px;
}
.btns-container{
  display: flex;
  justify-content: right;

  column-gap: 20px;
}
.delete-btn {
  padding: 8px;

border: 2px solid rgb(190, 59, 59);
border-radius: 8px;

background-color: rgb(190, 59, 59);

color: white;
}
.delete-btn:hover {
  color: rgb(190, 59, 59);
  background-color: white;
}

</style>