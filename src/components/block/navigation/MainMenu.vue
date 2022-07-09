<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useAuth } from "@/stores/authStore";
import { links, subMenu } from "@/components/block/navigation/menuLinks";

const route = useRoute();
const authStore = useAuth();
const checkLogin = computed(() => authStore.loggedIn);
const checkRoute = () => {
  if (isSubMenu.value === "" && typeof route.meta.parent !== "undefined") {
    if (typeof subMenu[route.meta.parent] !== "undefined") {
      isSubMenu.value = route.meta.parent;
    }
  }
};
const activeSubMenu = computed(() => {
  checkRoute();
  // TODO Оптимизивовать скорость загрузки
  if (subMenu[isSubMenu.value]) {
    return subMenu[isSubMenu.value].filter(
      (v) => v.logIn === checkLogin.value || typeof v.logIn == "undefined"
    );
  }
});
const isSubMenu = ref(""); // Название активного Суб Меню

/**
 * Активация пункта меню,
 *  после перезагрузки страницы активная ссылка меню остаётся активной
 * @param {*} id Идентификатор элемента меню (ссылки)
 */
const addActiveClass = (id) => {
  links.value.forEach((value) => {
    if (value.id === id) {
      value.isActive = true;
      isSubMenu.value = value.subMenu;
    } else {
      value.isActive = false;
    }
  });
};
</script>
<template>
  <nav id="navigation" class="nav">
    <ul class="nav__menu">
      <li v-for="link in links" :key="link.url">
        <a
          :data-id="link.id"
          :href="link.url"
          class="nav__menu-link"
          :class="{
            active: link.isActive || $route.meta.parent === link.subMenu,
            green: $route.meta.parent === link.subMenu,
          }"
          @click.prevent="addActiveClass(link.id)"
        >
          <fa :icon="link.icon" /> <span>{{ link.title }}</span>
        </a>
      </li>
    </ul>
    <div id="sub-menu">
      <ul class="nav__sub-menu">
        <li v-for="(value, index) in activeSubMenu" :key="index">
          <router-link :to="value.url" active-class="active">
            {{ value.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
#navigation,
.nav {
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  width: 100%;

  @include screen-size(sm) {
    width: 100vw;
  }

  // Главное меню
  &__menu {
    @include screen-size(sm) {
      span {
        display: none;
      }
    }

    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    background-color: #f5faff;
    padding: 0;
    text-transform: uppercase;
    align-items: center;
    font-family: "Bitter", sans-serif;
    font-weight: 600;
    font-size: 12px;

    @include screen-size(xl) {
      font-size: 10px;
    }

    height: 46px;

    .active::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%, 0px);
      border-width: 10px;
      border-style: solid;
      border-top-color: transparent;
      border-right-color: transparent;
      border-left-color: transparent;
      border-image: initial;
      border-bottom-color: #194484;
    }
  }

  &__menu-link {
    position: relative;
    display: block;
    padding: 16px 10px;

    @include screen-size(xl) {
      padding: 17px 10px;
    }

    color: #194484;

    svg {
      padding-right: 4px;
    }

    &:hover {
      background-color: #0d6eb7;
      color: #ffffff !important;
    }
  }

  // Сабменю
  #sub-menu {
    background: #194484;
    height: 80px;
    font-weight: 600;
    font-size: 11px;
    overflow: hidden;

    @include screen-size(xl) {
      font-size: 9px;
    }

    @include screen-size(sm) {
      overflow-x: scroll;
      overflow-y: hidden;
    }

    text-transform: uppercase;
  }

  .tab-active {
    display: flex !important;
    justify-content: flex-start;
    align-items: center;
  }

  &__sub-menu {
    // display: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    letter-spacing: 0.04em;

    @include screen-size(sm) {
      //overflow: hidden;
    }

    li {
      @include screen-size(sm) {
        flex: 0 0 auto;
      }

      position: relative;

      a {
        padding: 21px;
        color: #f5faff !important;
      }

      a:before {
        content: "";
        position: absolute;
        height: 10px;
        right: 15px;
        left: 15px;
        display: block;
        background-color: #fff;
        bottom: -27px;
        opacity: 0.5;
        transition: transform 0.3s ease;
        transform: translateY(20px);
      }

      a:hover:before,
      .active:before {
        transform: translateY(0);
      }
    }
  }
}

.green {
  color: green;
}
</style>
