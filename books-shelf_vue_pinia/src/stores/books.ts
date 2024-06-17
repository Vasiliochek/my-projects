import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Book } from '@/types/Book'
import type { UserStatus } from '@/types/UserStatus'
import { getBooksApi } from '@/api/takeBooksListFromApi'




export const getBooks = defineStore('books', () => {
  
  const books = ref<Book[]>([])
  const userStatus = ref<UserStatus>({
    login: false,
    name: 'User Userovich',
    readedBooks: 0,
    booksOnShelf: 0
  })

  async function refreshBooksLocal () {
    books.value.sort((a, b) => {return a.id - b.id})
    localStorage.setItem('allBooks', JSON.stringify(books.value))
  }

  async function refreshUserStatus () {
    localStorage.setItem('UserStatus', JSON.stringify(userStatus.value))
  }

  async function fetchBooksArr() {
    if(!userStatus.value.login) {
      try {
        books.value =  await getBooksApi()
        if (localStorage.getItem('allBooks') === null){
         refreshBooksLocal()
        }
      }
      catch(err) {
        console.log(err)
      }
    } 
    if (userStatus.value.login) {
      try {
          books.value = JSON.parse(localStorage.getItem('allBooks')as string) 
          console.log(userStatus.value.login)
        }
      catch(err) {
        console.log(err)
      }
    }
  }

  async function setOrGetUserStatus () {
    if(localStorage.getItem('UserStatus') === undefined || localStorage.getItem('UserStatus') === null) {
      refreshUserStatus()
   } else {
     userStatus.value = JSON.parse(localStorage.getItem('UserStatus') as string)
   }
  }

  setOrGetUserStatus()

  fetchBooksArr()
  
  

  return {
    books,
    userStatus,
    refreshBooksLocal,
    refreshUserStatus,
    fetchBooksArr
  }
})
