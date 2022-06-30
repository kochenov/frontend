<script setup>
import { RouterView } from "vue-router";

// Components
import HeaderPart from "@/components/parts/header/HeaderPart.vue";
import PromoLink from "@/components/parts/header/PromoLink.vue";
//import BreadcrumbsNav from "@/components/parts/header/BreadcrumbsNav.vue";
</script>

<template>
  <HeaderPart />
  <PromoLink />
  <!--<BreadcrumbsNav /> -->
  <RouterView />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,200;0,300;0,400;0,600;0,800;1,300;1,500&display=swap");

html {
  font-size: 1px;
}

body {
  font-family: $font-text;
  background-color: $top-header-background;
  font-size: 14rem;
}

a,
button,
input[type="button"],
input[type="submit"] {
  transition: 0.3s;
}

.page {
  display: grid;
  grid-template-areas: "page-main sidebar";
  grid-template-columns: 1fr 380px;

  //grid-template-rows: minmax(500px, 100%);
  @include screen-size(xl) {
    grid-template-areas:
      "page-main"
      "sidebar";
    grid-template-columns: 0.92fr;
    justify-content: center;
    //padding-right: 40px;
  }

  gap: 30px;
}

.page-main {
  grid-area: page-main;
}

.sidebar {
  grid-area: sidebar;
}
</style>
