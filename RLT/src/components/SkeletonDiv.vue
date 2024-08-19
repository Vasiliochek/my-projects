<template>
  <div class="placeholder">
    &nbsp;
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  borderRadius: {
    type: String,
  }
})
</script>

<style lang="scss" scoped>
@keyframes bgAnimation {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0 ;
  }
}

.placeholder {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
  background-image: linear-gradient(to right,
  rgba(60, 60, 60, 1) 0%,
  rgb(92, 92, 92) 10%,
  rgba(60, 60, 60, 1) 20%,
  rgba(60, 60, 60, 1) 100%);
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  animation: bgAnimation 1.2s linear infinite;
}
</style>
