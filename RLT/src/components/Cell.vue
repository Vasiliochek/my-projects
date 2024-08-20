<template>
  <div class="cell-container" >
    <div class="cell-content-wrapper" v-if="cellContent.quantity">
      <div class="cell-content">
        <div class="bottom-square"></div>
        <div class="top-square"></div>
      </div>
      <div class="cell-quantity">
        {{ cellContent.quantity }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['cellContent'])
</script>

<style lang="scss" scoped >
.cell-container {
  background-color: rgba(38, 38, 38, 1);

  :hover {
    background-color: rgba(47, 47, 47, 1);
  }
  .cell-content {
    width: 54px;
    height: 54px;

    position: relative;

    .bottom-square {
      position: absolute;
      bottom: 0;
      left: 0;

      width: 48px;
      height: 48px;

      background-color: rgba(127, 170, 101, 1);
    }

    .top-square {
      position: absolute;
      top: 0;
      right: 0;

      width: 48px;
      height: 48px;

      background-color: rgba(184, 217, 152, 0.35);
      backdrop-filter: blur(5px);
    }
  }

  .cell-content-wrapper {
    position: relative;
    padding: 23px 25px 23px 26px;
    .cell-quantity {
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 16px;
    width: 16px;

    bottom: 0px;
    right: -0px;

    border-radius: 6px 0 0 0;

    background-color: rgba(38, 38, 38, 1);

    border-top:1px solid rgba(77, 77, 77, 1);
    border-left:1px solid rgba(77, 77, 77, 1);

    color : rgba(255, 255, 255, 1);
    font-size: 10px;
  }
  }
}
</style>