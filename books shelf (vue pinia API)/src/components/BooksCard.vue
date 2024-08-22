<template>
  <div :class="['book']" v-if="condition">
    <img :src="book.cover_image" class="book-img-top" alt="book image">
    <div class="book-body">
        <h5 class="book-title">"{{ book.title }}""</h5>
        <p class="book-author">Author: {{ book.author }}</p>
        <p class="book-year">Publication year: {{ book.publication_year }}.</p>
        <p class="book-descr">{{ book.description }}</p>
      <div class="btns-container">
        <button class="add-btn" v-if="userStatus.login" @click="addToShelf" >Add to shelf</button>
        <button class="readed-btn" v-if="userStatus.login" @click="readedBook">Already readed</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getBooks } from '@/stores/books';
import type { Book } from '@/types/Book';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const prop = defineProps<{book: Book}>()

const store = storeToRefs(getBooks())
const userStatus = ref(store.userStatus)



const readedBook = () => {
  if (userStatus.value.login) {
    prop.book.readed = true
    userStatus.value.readedBooks = userStatus.value.readedBooks + 1
    getBooks().refreshUserStatus()
    getBooks().refreshBooksLocal()
    console.log(userStatus.value.readedBooks)
  } else {
    alert('You need to Login!')
  }

}

const addToShelf = () => {
  if (userStatus.value.login) {
prop.book.onShelf = true
userStatus.value.booksOnShelf = userStatus.value.booksOnShelf + 1
getBooks().refreshUserStatus()
getBooks().refreshBooksLocal()
  } else {
    alert('You need to Login!')
  }
}

const condition = computed(() => {
  return !prop.book.readed && !prop.book.onShelf
})

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
.add-btn{
  transition: all 0.1s;
  padding: 8px;

  border: 2px solid rgb(0, 120, 189);
  border-radius: 8px;

  background-color: rgb(0, 120, 189);

  color: white;
  
}
.add-btn:hover {
  color: rgb(0, 120, 189);
  background-color: white;
}
.readed-btn {
  padding: 8px;

border: 2px solid hsla(160, 100%, 37%, 1);
border-radius: 8px;

background-color: hsla(160, 100%, 37%, 1);

color: white;
}
.readed-btn:hover {
  color: hsla(160, 100%, 37%, 1);
  background-color: white;
}


</style>