<script setup>
import { computed, markRaw, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAuth } from "@/stores/authStore";

// Components
import HeaderPart from "@/components/parts/header/HeaderPart.vue";
import PromoLink from "@/components/parts/header/PromoLink.vue";
import BreadcrumbsNav from "@/components/parts/header/BreadcrumbsNav.vue";
// LayOuts
import IndexLayout from "@/views/layouts/IndexLayout.vue";
import HomeLayout from "@/views/layouts/HomeLayout.vue";

const route = useRoute();
const authStore = useAuth();

const layout = computed(() => {
  if (route.meta.layout == "home") {
    return HomeLayout;
  } else if (route.meta.layout == "index") {
    return IndexLayout;
  }
});
</script>

<template>
  <HeaderPart />
  <PromoLink />
  <div v-if="!authStore.loading">
    <BreadcrumbsNav v-if="$route.name !== 'home'" />
    <component :is="layout" />
  </div>
  <div v-else class="loading">
    <div>
      <h1>ЗАГРУЗКА...</h1>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
}

@import url("https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,200;0,300;0,400;0,600;0,800;1,300;1,500&display=swap");

html {
  font-size: 1px;
}

.loading {
  height: calc(100vh - 161px);
  width: 100%;
  background: #1944840b;
  display: flex;
  flex-direction: row;

  div {
    color: rgb(45, 45, 36);
    margin: auto;
  }
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
