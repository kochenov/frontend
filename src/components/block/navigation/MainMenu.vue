<script setup>
import { ref } from "vue";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/stores/authStore";
const authStore = useAuth();
const checkLogin = computed(() => authStore.loggedIn && !authStore.loading);

const isSubMenu = ref(""); // Название активного Суб Меню
/**
 * Ссылки главного меню
 * TODO: Переместить в STATE MANAGER
 */
const links = ref([
  {
    id: 1,
    title: "",
    subMenu: "home",
    url: "/",
    icon: "home",
    isActive: false,
  },
  {
    id: 2,
    title: "Новости",
    subMenu: "news",
    url: "/news",
    icon: "rss-square",
    isActive: false,
  },
  {
    id: 3,
    title: "О нас",
    subMenu: "about",
    url: "/about",
    icon: "building",
    isActive: false,
  },
  {
    id: 4,
    title: "Объявления",
    subMenu: "bulletinBoard",
    url: "/bulletin-board",
    icon: "sticky-note",
    isActive: "",
  },
  {
    id: 5,
    title: "Блоги",
    subMenu: "blogs",
    url: "/blogs",
    icon: "blog",
    isActive: false,
  },
  {
    id: 6,
    title: "Статьи",
    subMenu: "articles",
    url: "/articles",
    icon: "newspaper",
    isActive: false,
  },
  {
    id: 7,
    title: "Расчёты",
    subMenu: "seeding",
    url: "/seeding",
    icon: "calculator",
    isActive: false,
  },
  {
    id: 8,
    title: "Календари",
    subMenu: "сalendars",
    url: "/сalendars",
    icon: "calendar-alt",
    isActive: false,
  },
  {
    id: 9,
    title: "Кабинет",
    subMenu: "account",
    url: "/account",
    icon: "sign-in-alt",
    isActive: false,
  },
]);
/**
 * Ссылки суб меню, активное меню указано в meta.parent у роутера
 * TODO: Переместить в STATE MANAGER
 */
const subMenu = {
  home: [
    {
      id: 1,
      title: "Главная",
      url: "/",
      extrac: true,
    },
    {
      id: 2,
      title: "Топ Блогеров",
      url: "/blogers/top",
    },
    {
      id: 3,
      title: "Топ видео",
      url: "/video/top",
    },
    {
      id: 4,
      title: "Сообщеста",
      url: "/communities",
    },
    {
      id: 5,
      title: "Стать автором",
      url: "/authors/register",
    },
  ],
  news: [
    {
      id: 1,
      title: "События",
      url: "/news/action",
      extrac: true,
    },
    {
      id: 2,
      title: "Новости портала",
      url: "/news",
    },
    {
      id: 3,
      title: "Новые пользователи",
      url: "/users/new",
    },
    {
      id: 4,
      title: "Рекорды",
      url: "/records",
    },
  ],
  about: [
    {
      id: 1,
      title: "О сайте",
      url: "/about",
    },
    {
      id: 2,
      title: "Контакты",
      url: "/contacts",
    },
    {
      id: 3,
      title: "Партнёрам",
      url: "/for-partners",
    },
    {
      id: 4,
      title: "Авторам",
      url: "/for-authors",
    },
    {
      id: 5,
      title: "Стать автором",
      url: "/author/new",
    },
    {
      id: 6,
      title: "Обратная связь",
      url: "/feedback",
    },
    {
      id: 7,
      title: "Правила",
      url: "/rules",
    },
  ],
  bulletinBoard: [
    {
      id: 1,
      title: "Недвижимость",
      url: "/bulletin-board",
    },
    {
      id: 2,
      title: "Продукция",
      url: "/production",
    },
    {
      id: 3,
      title: "Животные",
      url: "/animals",
    },
    {
      id: 4,
      title: "Добавить объявления",
      url: "/board-add",
    },
  ],
  blogs: [
    {
      id: 1,
      title: "Все записи",
      url: "/posts",
    },
    {
      id: 2,
      title: "Список блогов",
      url: "/blogers-list",
    },
    {
      id: 3,
      title: "Блогеры",
      url: "/blogers",
    },
    {
      id: 4,
      title: "Создать блог",
      url: "/create-add-blog",
    },
  ],
  articles: [
    {
      id: 1,
      title: "Полезное",
      url: "/articles/useful",
    },
    {
      id: 2,
      title: "Огород и сад",
      url: "/articles/vegetable-garden-and-garden",
    },
    {
      id: 3,
      title: "Животноводство",
      url: "/articles/animal-husbandry",
    },
    {
      id: 4,
      title: "Добавить статью",
      url: "/articles/create",
    },
  ],
  seeding: [
    {
      id: 1,
      title: "Расчёты посева",
      url: "/calculation/seeding",
    },
    {
      id: 2,
      title: "Расчёт корма",
      url: "/calculation/feed",
    },
    {
      id: 3,
      title: "Контроль веса",
      url: "/calculation/weight-control",
    },
    {
      id: 4,
      title: "Бизнес планы",
      url: "/calculation/bisnes-plans",
    },
    {
      id: 5,
      title: "Расчёты пользователей",
      url: "/calculation/all-users",
    },
  ],
  сalendars: [
    {
      id: 1,
      title: "Список задач",
      url: "/task-list",
    },
    {
      id: 2,
      title: "Рекомендации",
      url: "/recomendations",
    },
    {
      id: 3,
      title: "Задачи пользователей",
      url: "/user-tasks",
    },
    {
      id: 4,
      title: "Добавить задачу",
      url: "/add-task",
    },
  ],
  account: [
    {
      id: 1,
      title: "Вход",
      url: "/login",
      logIn: false,
    },
    {
      id: 2,
      title: "Регистрация",
      url: "/registration",
      logIn: false,
    },
    {
      id: 3,
      title: "Личный кабинет",
      url: "/dashboard",
      logIn: true,
    },
    {
      id: 4,
      title: "Уведомления",
      url: "/notifications",
      logIn: true,
    },
    {
      id: 5,
      title: "Выход",
      url: "/logout",
      logIn: true,
    },
  ],
};

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
/**
 * Показывает на основе главного активного пункта меню
 * Суб меню
 * @param {*} r $router
 * @return Возвращает массив обьектов активного субменю
 * @todo Оптимизировать
 */
const subMenuActive = (r) => {
  if (typeof r !== "undefined" && isSubMenu.value === "") {
    return subMenu[r.meta.parent];
  } else {
    return subMenu[isSubMenu.value];
  }
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
        <li v-for="(value, index) in subMenuActive($route)" :key="index">
          <router-link
            v-if="value.logIn === checkLogin || typeof value.logIn == 'undefined'"
            :to="value.url"
            active-class="active"
          >
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
