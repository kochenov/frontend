<template>
  <div class="page wrap">
    <main class="page-main home">
      <slot name="content" />
    </main>
    <aside class="sidebar">
      <slot name="sidebar" />
    </aside>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
