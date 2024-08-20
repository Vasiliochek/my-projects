<template>
  <section>
    <div class="container">
      <Cell 
      v-for="cellContent in cellsArr"
      :key="cellContent.id"
      :cellContent="cellContent"
      @click="openModal(cellContent)"
      />
      <ModalMenu 
      class="modal modal-off"
      @closeModal="closeModal"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Cell from './Cell.vue';
import ModalMenu from './ModalMenu.vue';

const emit = defineEmits(['closeModal'])

const cellsArr = ref([
  {
    id: 1,
    quantity: 4,
    color: 'green'
  },
  {
    id: 2,
    quantity: 2,
    color: 'red'
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

const openModal = (cellContent: any) => {
  const modal = document.querySelector('.modal')

  if (cellContent.quantity) {
    modal?.classList.add('modal-active')
    modal?.classList.remove('modal-off')
  }
  
}

const closeModal = () => {
  const modal = document.querySelector('.modal')
  modal?.classList.add('modal-off')
  modal?.classList.remove('modal-active')
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