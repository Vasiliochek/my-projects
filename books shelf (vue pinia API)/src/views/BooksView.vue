<template>
  <div class="search-container">
      <p>Search book by name:</p>
      <input type="searchText" v-model="searchText" @blur="notFoundSearch = false">
    </div>
    <h2 class="not-found-search" v-if="notFoundSearch">"Ops...We don`t have that book, or maybe books alredy readed or on your shelf!"</h2>
  <div class="books-container">
    <BooksCard v-for="book in books"  :key="book.id" :book="book"  />
  </div>
  
</template>

<script setup lang="ts">
import BooksCard from '@/components/BooksCard.vue';
import { ref, watch} from 'vue';
import { getBooks } from '@/stores/books';
import { storeToRefs } from 'pinia';

const store = storeToRefs(getBooks())
const books = ref(store.books)
const searchText = ref('')
const notFoundSearch = ref(false)

watch(searchText, () => {
  if(searchText.value.length < 2) {
    notFoundSearch.value = false
    getBooks().fetchBooksArr()
    return
  } else {
    books.value = books.value.filter(el => el.title.includes(searchText.value))
    if(books.value.length <=1 && books.value[0].onShelf === true || books.value[0].readed === true ) {
     notFoundSearch.value = true
    }
  }
})

</script>

<style scoped>
.books-container {
  display: flex;
  flex-wrap: wrap;

  row-gap: 10px ;
  column-gap: 10px;
}

.search-container {
  display: flex;
  justify-content: space-between;

  max-width: 380px;

  margin-bottom: 20px;
}

.search-container p {
  font-size: 18px;
}
.search-container input {
  border: 1px solid #181818;
  border-radius: 4px;

  color: #181818;
}
.search-container input:focus {
  outline-color:hsla(160, 100%, 37%, 1)
}
</style>