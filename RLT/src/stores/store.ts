import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CellObject } from '../types/Cell.ts'


export const getCells = defineStore('cells', () => {
  
  const cells = ref<CellObject[]>([
    {
      id: 1,
      quantity: 4,
      color: 'green'
    },
    {
      id: 2,
      quantity: 2,
      color: 'orange'
    },
    {
      id: 3,
      quantity: 5,
      color: 'purple'
    },
    {
      id: 4,
      quantity: 0,
      color: ''
    },
    {
      id: 5,
      quantity: 0,
      color: ''
    },
    {
      id: 6,
      quantity: 0,
      color: ''
    },
    {
      id: 7,
      quantity: 0,
      color: ''
    },
    {
      id: 8,
      quantity: 0,
      color: ''
    },
    {
      id: 9,
      quantity: 0,
      color: ''
    },
    {
      id: 10,
      quantity: 0,
      color: ''
    },
    {
      id: 11,
      quantity: 0,
      color: ''
    },
    {
      id: 12,
      quantity: 0,
      color: ''
    },
    {
      id: 13,
      quantity: 0,
      color: ''
    },
    {
      id: 14,
      quantity: 0,
      color: ''
    },
    {
      id: 15,
      quantity: 0,
      color: ''
    },
    {
      id: 16,
      quantity: 0,
      color: ''
    },
    {
      id: 17,
      quantity: 0,
      color: ''
    },
    {
      id: 18,
      quantity: 0,
      color: ''
    },
    {
      id: 19,
      quantity: 0,
      color: ''
    },
    {
      id: 20,
      quantity: 0,
      color: ''
    },
    {
      id: 21,
      quantity: 0,
      color: ''
    },
    {
      id: 22,
      quantity: 0,
      color: ''
    },
    {
      id: 23,
      quantity: 0,
      color: ''
    },
    {
      id: 24,
      quantity: 0,
      color: ''
    },
    {
      id: 25,
      quantity: 0,
      color: ''
    }
  ])

  async function putCellsLocal () {
      localStorage.setItem('cellsArr', JSON.stringify(cells.value))
  }

  async function checkCellLocal () {
    if (localStorage.getItem('cellsArr')) {
      cells.value = JSON.parse(localStorage.getItem('cellsArr')!)
      return
    } else {
      putCellsLocal()
    }

  }

  checkCellLocal()

  return { cells, putCellsLocal }
})