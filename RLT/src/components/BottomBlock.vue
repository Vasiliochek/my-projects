<template>
  <section>
    <div class="container">
      <SkeletonDiv height="36px" width="699px" borderRadius="12px" />
      <SvgXMark class="close-btn"/>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SkeletonDiv from './SkeletonDiv.vue'
import SvgXMark from './icons/SvgXMark.vue';
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(38, 38, 38, 1);

  width: 785px;
  height: 72px;

  border: 1px solid rgba(77, 77, 77, 1);
  border-radius: 12px;

  padding: 18px;
  padding-right: 68px ;

  position: relative;
  .close-btn {
    position: absolute;
    top: 14px;
    right: 14px;

    cursor: pointer;
  }
}
</style>