<template>
  <tr class="table-row h-14 border border-1 border-t-0 border-gray-400 divide-x divide-solid divide-gray-400">
    <td class="text-center">{{ props.user }}</td>
    <td class="text-center text-sm px-3 py-2">{{ props.title }}</td>
    <td class="text-center text-sm px-3 py-1">{{ props.body }}</td>
  </tr>
</template>

<script setup lang="ts">
const props = defineProps({
  user: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  body: {
    type: String,
    default: 'lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
})
</script>

<style scoped lang="scss">
.table-row:nth-child(2n) {
  background-color: rgba(228, 228, 228, 0.856);
}
</style>