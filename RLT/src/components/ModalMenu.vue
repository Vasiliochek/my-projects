<template>
  <div class="modal-container">
    <SvgXMark class="close-btn" @click="$emit('closeModal')"/>
    <div class="cell-content">
        <div class="cell-content__wrapper">
          <div class="bottom-square"></div>
          <div class="top-square"></div>
        </div>
    </div>
    <div class="modal-info">
      <SkeletonDiv height="30px" width="211px" borderRadius="8px" />
      <div class="modal-info__text">
        <SkeletonDiv height="10px" width="211px" borderRadius="4px" />
        <SkeletonDiv height="10px" width="211px" borderRadius="4px" />
        <SkeletonDiv height="10px" width="211px" borderRadius="4px" />
        <SkeletonDiv height="10px" width="180px" borderRadius="4px" />
        <SkeletonDiv height="10px" width="80px" borderRadius="4px" />
      </div>
    </div>
    <div class="modal-control">
      <div 
      v-show="editOpen" class="modal-control__form-container">
        <form class="form" @submit.prevent="">
          <input class="input" type="text" name="quantity" placeholder="Введите количество">
          <div class="buttons-container">
            <button
            @click="editOpen = false"
             class="discard-btn">Отмена</button>
            <button class="confirm-btn">Подтвердить</button>
          </div>
        </form>
      </div>
      <button 
      v-show="!editOpen" 
      @click="editOpen = true"
      class="modal-control__delete-btn" >
       Редактировать
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SvgXMark from './icons/SvgXMark.vue';
import SkeletonDiv from './SkeletonDiv.vue';

const editOpen = ref(false)

</script>

<style lang="scss" scoped>
.modal-container {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 18px 15px;

  width: 250px;
  height: 500px;

  background-color: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(11px);

  border: 1px solid rgba(77, 77, 77, 1);

  .close-btn {
    position: absolute;
    top: 14px;
    right: 14px;

    cursor: pointer;
  }

  .cell-content {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 210px;
    min-height: 197px;

    border-bottom: 1px solid rgba(77, 77, 77, 1);

    &__wrapper {
      width: 130px;
      height: 130px;

      position: relative;
      
      display: flex;
      .bottom-square {
      position: absolute;
      bottom: 0;
      left: 0;

      width: 115.5px;
      height: 115.5px;

      background-color: rgba(127, 170, 101, 1);
    }

    .top-square {
      position: absolute;
      top: 0;
      right: 0;

      width: 115.5px;
      height: 115.5px;

      background-color: rgba(184, 217, 152, 0.35);
      backdrop-filter: blur(5px);
    }
    }
  }

  .modal-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    gap: 24px;

    height: 208px;

    overflow: hidden;

    padding-top: 16px;

    border-bottom: 1px solid rgba(77, 77, 77, 1);

    .modal-info__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  .modal-control {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    flex-grow: 2;

    padding-top: 20px;

    min-height: 57px;
    max-height: 113px;

    &__form-container {
      .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        row-gap: 16px;


        .input {
          width: 210px;
          height: 40px;

          background-color: transparent;

          border: 1px solid rgba(77, 77, 77, 1);
          border-radius: 4px;

          color: #fff;

          padding: 11px 12px 12px 12px;
        }

        .buttons-container {
          display: flex;
          gap: 10px;
          
          .discard-btn {
            width: 88px;
            height: 33px;

            border: none;
            border-radius: 8px;
          }

          .confirm-btn {
            width: 112px;
            height: 33px;

            border: none;
            border-radius: 8px;

            background-color: rgba(250, 114, 114, 1);
            color: white;
          }
        }
      }
    }

    &__delete-btn {
      width: 220px;
      height: 39px;

      border: none;
      border-radius: 8px;

      background-color: rgba(250, 114, 114, 1);
      color: white;
    }
  }
}
</style>