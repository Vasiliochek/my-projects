<template>
  <section>
    <div class="container">
      <img class="blur-img" src="../assets/img/Img Blur.jpg" alt="blur img">
      <div class="text-container">
        <SkeletonDiv height="26px" width="190px" borderRadius="8px" />
        <div class="text">
          <SkeletonDiv height="10px" width="155px" borderRadius="4px" />
          <SkeletonDiv height="10px" width="190px" borderRadius="4px" />
          <SkeletonDiv height="10px" width="170px" borderRadius="4px" />
          <SkeletonDiv height="10px" width="160px" borderRadius="4px" />
          <SkeletonDiv height="10px" width="140px" borderRadius="4px" />
        </div>
        <SkeletonDiv height="10px" width="80px" borderRadius="4px" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SkeletonDiv from './SkeletonDiv.vue'
</script>

<style scoped lang="scss">

.container {
  background-color: rgba(38, 38, 38, 1);

  padding: 18px 14px 24px 14px;
  max-height: 500px;
  max-width: 236px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  border: 1px solid rgba(77, 77, 77, 1);
  border-radius: 12px;

  .blur-img {
  width: 208px;
  height: 240px;

  border-radius: 10px;
  }

  .text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

  .text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
}


</style>