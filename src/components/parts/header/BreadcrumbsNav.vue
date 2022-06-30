<template>
  <div class="breadcrumbs">
    <div class="wrap">
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">
            <fa icon="home" />
          </router-link>
        </li>
        <!-- 
            TODO Оптимизировать хранение данных в роутере на основе динамических 
            маршрутов
        -->
        <li v-for="(link, index) in $route.meta.breadcrumbs" :key="link.url">
          <router-link v-if="index < $route.meta.breadcrumbs.length - 1" :to="link.url"
            >{{ link.name }}
          </router-link>
          <span v-else>{{ link.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.breadcrumbs {
  @include screen-size(sm) {
    display: none;
  }

  ul {
    padding: 16px 0;
    margin-left: 40px;
    list-style: none;
    display: flex;
    gap: 18px;
  }

  li {
    position: relative;
    padding-left: 18px;
    font-size: 14rem;

    @include screen-size(xl) {
      font-size: 11rem;
    }

    &::after {
      content: url("@/assets/images/icons/i-right.svg");
      position: absolute;
      fill: #a9a9a9;
      font-size: 11px;
      top: 3px;
      right: -20px;
      width: 6px;
    }

    &:last-child::after {
      content: none;
    }
  }

  a {
    text-decoration: none;
    color: #000000;
    font-weight: 600;
  }

  background-color: #f4f5f7;
}
</style>
