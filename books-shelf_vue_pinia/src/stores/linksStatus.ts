
import { defineStore } from 'pinia'
import type { LinkStatus } from '@/types/LinkStatus'
import { ref } from 'vue'

export const linkStore = defineStore('linksStatus', () => {
    const links = ref<LinkStatus>({
      main: true,
      books: false,
      readed: false,
      shelf: false,})
        
      async function refreshLinksLocal() {
        localStorage.setItem('linksStatus', JSON.stringify(links.value))
      }
    
      async function setOrGetLinksStatus()  {
        if(localStorage.getItem('linksStatus') === undefined || localStorage.getItem('linksStatus') === null) {
          refreshLinksLocal()
       } else {
         links.value = JSON.parse(localStorage.getItem('linksStatus') as string)
       }
      }

      setOrGetLinksStatus()

      return {
        links,
        refreshLinksLocal,
        setOrGetLinksStatus
      }
})