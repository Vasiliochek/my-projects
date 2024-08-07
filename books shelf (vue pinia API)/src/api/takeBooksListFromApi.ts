import type { Book } from '@/types/Book';

 export const getBooksApi = async ():Promise<Book[]> => {
 try {
    const fetchResponse = await fetch(`https://freetestapi.com/api/v1/books`)
    const response = await fetchResponse.json()
    const books: Book[] = response
    return books
 } catch(err) {
    throw new Error('Something wrong with API!')
 }
}