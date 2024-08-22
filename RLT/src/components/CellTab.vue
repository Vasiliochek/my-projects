<template>
  <section>
    <div class="container">
      <Cell 
      v-for="cellContent in cellsArr"
      :key="cellContent.id"
      :cellContent="cellContent"
      :draggable="true"
      @click="openModal(cellContent)"
      @dragstart="startDrag($event, cellContent)"
      @drop="onDrop(cellContent)"
      @dragover.prevent
      @dragenter.prevent
      :id="cellContent.id"
      />
      <ModalMenu 
      class="modal modal-off"
      @closeModal="closeModal"
      @setQuantity="setQuantity"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Cell from './Cell.vue';
import ModalMenu from './ModalMenu.vue';
import type { CellObject } from '@/types/Cell.ts';
import { getCells } from '../stores/store';
import { storeToRefs } from 'pinia';

declare global {
  interface Array<T> {
    swap(index1: number, index2:number);
  }
}

Array.prototype.swap = function (index1, index2) {
  [this[index1], this[index2]] = [this[index2], this[index1]];
};

const emit = defineEmits(['setQuantity'])

let modalData = reactive({})

const store = storeToRefs(getCells())
const cellsArr = ref(store.cells)

const openModal = (cellContent: CellObject) => {
  const modal = document.querySelector('.modal')

  if (cellContent.quantity) {
    modal?.classList.add('modal-active')
    modal?.classList.remove('modal-off')

    modalData = cellContent
  }
  
}

const closeModal = () => {
  const modal = document.querySelector('.modal')
  modal?.classList.add('modal-off')
  modal?.classList.remove('modal-active')

  modalData = {}
}

const setQuantity = (val) => {
  modalData['quantity'] = Number(val)
  console.log(modalData);

  cellsArr.value.map((cell: CellObject) => {
    if (cell.id === modalData['id']) {
      return modalData
    } else {
      return cell
    }
  })

  getCells().putCellsLocal()
}

const startDrag = (event, item) => {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    
    modalData = item
}

const onDrop = (item) => {
  const secontItem = item
  
  cellsArr.value.swap(cellsArr.value.indexOf(modalData as CellObject), cellsArr.value.indexOf(secontItem))
  getCells().putCellsLocal()
}

</script>

<style lang="scss" scoped>
 .container {
  background-color: rgba(77, 77, 77, 1);

  width: 525px;
  height: 500px;

  position: relative;

  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);

  border: 1px solid rgba(77, 77, 77, 1);
  border-radius: 12px ;

  gap: 1px;

  .cell {
    cursor: pointer;
    :hover {
      background-color: rgba(47, 47, 47, 1);
    }
  }

  .modal {
    position: absolute;
  }

  .modal-active {
    right: -1px;
    top: -1px;

    transition: 0.5s ease-in-out;
  }
  .modal-off {
    right: -250px;
    top: -1px;
    transition: 0.5s ease-in-out;
  }
 }
</style>