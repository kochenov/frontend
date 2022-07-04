<template>
  <div class="grup">
    <label v-if="name" :for="idLabel">{{ name }}</label>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  idLabel: {
    type: String,
  },
  name: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
@include grup-label();
</style>
