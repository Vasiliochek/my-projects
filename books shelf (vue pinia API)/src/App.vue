<template>
  <header class="header-container">
    <div class="logo-container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
      <h1>Books shelf</h1>
      <button v-if="!userStatus.login" class="login-btn" @click="userLogin">Login</button>
      <button v-if="userStatus.login" class="login-btn" @click="logout">Logout</button>
    </div>
    
      <nav class="nav-container">
        <RouterLink class="nav__item" 
            :class="{active: activeLinks.main}" 
            @click="isActive($event)" 
            :to="{path: '/'}">
            Main 
            <div :class="{fakeBorder: activeLinks.main}"></div>
        </RouterLink>

        <RouterLink class="nav__item" 
            :class="{active: activeLinks.books}" 
            @click="isActive($event)" 
            :to="{path: '/books'}">
            Books 
            <div :class="{fakeBorder: activeLinks.books}"></div>
        </RouterLink>

        <RouterLink class="nav__item" 
            v-if="userStatus.login"
            :disabled="userStatus.login"
            :class="{active: activeLinks.readed}" 
            @click="isActive($event)" 
            :to="{path: '/readed-books'}">
            Readed 
            <div :class="{fakeBorder: activeLinks.readed}"></div>
        </RouterLink>

        <RouterLink class="nav__item" 
            v-if="userStatus.login"
            :class="{active: activeLinks.shelf}" 
            @click="isActive($event)" 
            :to="{path: '/shelf'}">
            Shelf
            <div :class="{fakeBorder: activeLinks.shelf}"></div>
        </RouterLink>
        <div class="user-info-container" v-if="userStatus.login">
          <p class="user-name">{{ userStatus.name }}</p>
          <p class="readed-book">Readed books: {{  userStatus.readedBooks }}</p>
          <p class="books-on-shelf">Books on shelf: {{ userStatus.booksOnShelf }}</p>
        </div>
      </nav>
      
  </header>

  <div class="render-container" :class="{renderLeftBorder: !activeLinks.main}" >
    
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref, watch} from 'vue';
import type { EventName } from './types/EventName';
import { storeToRefs } from 'pinia';
import { getBooks } from './stores/books';
import { useRouter } from 'vue-router';
import { linkStore } from './stores/linksStatus';

const store = storeToRefs(getBooks())
const linksStore = storeToRefs(linkStore())
const activeLinks = ref(linksStore.links)
const userStatus = ref(store.userStatus)



const router = useRouter()


const isActive = (event: Event ) => {
  const { target } = event
  if (target instanceof HTMLElement) {
 if (!target.className.includes('active')) {
  const eventName: EventName = target.innerText.toLocaleLowerCase() as EventName
  activeLinks.value[eventName] = true
  linkStore().refreshLinksLocal()
  for(const link in activeLinks.value) {
    const linkName: EventName = link as EventName
    if(linkName != eventName) {
      activeLinks.value[linkName] = false
      linkStore().refreshLinksLocal()
    }
  }
 } else {
  return
 }}}

const userLogin = () => {
  userStatus.value.login = true
  getBooks().refreshUserStatus()
  getBooks().fetchBooksArr()
}
const logout = () => {
  userStatus.value.login = false
  getBooks().refreshUserStatus()
  getBooks().refreshBooksLocal()
  activeLinks.value = {
    main: true,
      books: false,
      readed: false,
      shelf: false
  }
  linkStore().refreshLinksLocal()
  getBooks().fetchBooksArr()
  router.push('/')
}

</script>

<style scoped>
h1 {
  font-size: 60px;
  line-height: 50px;
}
.logo-container {
  display:flex;
  column-gap: 10px;

  margin-bottom: 20px;
}

.nav-container {
  position: relative;
  display: flex;
  column-gap: 3px;
}

nav {
  display: flex;
}
.nav__item{
  padding: 4px 8px 4px 8px;
  
  transition: none;
  font-size: 24px;
  line-height: 32px;
  z-index: 10;
}

.nav__item:hover {
  color: rgb(0, 87, 58);;
}

.user-info-container {
  position: absolute;
  right: 0;

  display: flex;
justify-content: space-between;

   width: 600px;
}
.user-info-container p {
  font-size: 22px;
}

.active{
  position: relative;

  padding: 2px 6px 2px 6px;

  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 12px 12px 0 0;
}

.fakeBorder {
position: absolute;
left: 0;
bottom: -4px;

background-color: white;

height: 5px;
width: 100%;
}

.render-container {
  padding: 2em;

  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 0 12px 12px 12px;
}

.renderLeftBorder {
  border-radius: 12px 12px 12px 12px;
}

.login-btn {
  width: 100px;

  margin-left: auto;

  background-color: white;
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 8px;

  color: hsla(160, 100%, 37%, 1);

  font-size: 24px;
}
.login-btn:hover {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
}

</style>
