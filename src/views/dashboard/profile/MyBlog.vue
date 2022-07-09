<template>
  <div>
    <div class="sub-title">
      <h2>Мои данные</h2>
      <ButtonExp class="btn-outline btn-save btn-yellow">Изменить</ButtonExp>
    </div>
    <div class="items">
      <div class="item">
        Имя: <i>{{ authStore.user.name }}</i>
      </div>
      <div class="item">
        Email: <i>{{ authStore.user.email }}</i>
      </div>
      <div class="item">
        Дата рождения: <i>{{ authStore.user.email }}</i>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonExp from "@/components/ui/button/ButtonExp.vue";
</script>

<style lang="scss" scoped></style>
