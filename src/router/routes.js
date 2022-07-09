import { canSeeUser, canSeeUsers } from "@/middleware";

export default [
  {
    path: "/",
    name: "home",
    meta: {
      requiresAuth: false,
      title: "Социальная сеть фермеров, сельских жителей и дачников",
      layout: "home",
      parent: "home",
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/blogers/top",
    name: "BlogersTop",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "home",
      breadcrumbs: [
        {
          name: "Блогеры",
          url: "/blogers",
        },
        {
          name: "Топ деревенских блогеров",
          url: "/blogers/top",
        },
      ],
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/video/top",
    name: "VideoTop",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "home",
      breadcrumbs: [
        {
          name: "Видеоролики",
          url: "/video",
        },
        {
          name: "Топ деревенских блогеров",
          url: "/video/top",
        },
      ],
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/communities",
    name: "Communities",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "home",
      breadcrumbs: [
        {
          name: "Список сообществ",
          url: "/сommunities",
        },
      ],
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/register",
    name: "AuthorRegister",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "home",
      breadcrumbs: [
        {
          name: "Список авторов",
          url: "/authors",
        },
        {
          name: "Регистранция нового автора / Заявка ",
          url: "/authors/register",
        },
      ],
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/news",
    name: "news",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "news",
      breadcrumbs: [
        {
          name: "Новости",
          url: "/news",
        },
        {
          name: "Все новости",
          url: "/news/action",
        },
      ],
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/news/action",
    name: "newsAction",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "news",
      breadcrumbs: [
        {
          name: "Новости",
          url: "/news",
        },
        {
          name: "События",
          url: "/news/action",
        },
      ],
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    name: "newUsers",
    path: "/users/new",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "news",
      breadcrumbs: [
        {
          name: "Новости",
          url: "/news",
        },
        {
          name: "События",
          url: "/news/action",
        },
      ],
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/records",
    name: "AuthorRecords",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "news",
      breadcrumbs: [
        {
          name: "Рекорды сайта",
          url: "/authors/records",
        },
      ],
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: { requiresAuth: false, parent: "about", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    meta: { requiresAuth: false, parent: "about", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/for-partners",
    name: "for-partners",
    meta: { requiresAuth: false, parent: "about", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/for-authors",
    name: "for-authors",
    meta: { requiresAuth: false, parent: "about", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/author/new",
    name: "author-new",
    meta: { requiresAuth: false, parent: "about", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/feedback",
    name: "feedback",
    meta: { requiresAuth: false, parent: "about", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/rules",
    name: "rules",
    meta: { requiresAuth: false, parent: "about", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/bulletin-board",
    name: "bulletinBoard",
    meta: { requiresAuth: false, parent: "bulletinBoard", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/real-estate",
    name: "real-estate",
    meta: { requiresAuth: false, parent: "bulletinBoard", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/production",
    name: "production",
    meta: { requiresAuth: false, parent: "bulletinBoard", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/animals",
    name: "animals",
    meta: { requiresAuth: false, parent: "bulletinBoard", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/board-add",
    name: "board-add",
    meta: { requiresAuth: false, parent: "bulletinBoard", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    meta: { layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/posts",
    name: "posts",
    meta: { requiresAuth: false, layout: "index", parent: "blogs" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/blogers-list",
    name: "blogersList",
    meta: { requiresAuth: false, layout: "index", parent: "blogs" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/blogers",
    name: "blogers",
    meta: { requiresAuth: false, layout: "index", parent: "blogs" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/create-add-blog",
    name: "createAddBlog",
    meta: { requiresAuth: false, layout: "index", parent: "blogs" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/articles",
    name: "articles",
    meta: { requiresAuth: false, parent: "articles", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/articles/useful",
    name: "articlesUseful",
    meta: { requiresAuth: false, parent: "articles", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/articles/vegetable-garden-and-garden",
    name: "articlesVegetableGardenAndGarden",
    meta: { requiresAuth: false, parent: "articles", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/articles/animal-husbandry",
    name: "AnimalHusbandry",
    meta: { requiresAuth: false, parent: "articles", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/articles/create",
    name: "articlesCreate",
    meta: { requiresAuth: false, parent: "articles", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/calculation/seeding",
    name: "seeding",
    meta: {
      requiresAuth: false,
      title: "Калькулятор расчёта размера грядок овощей",
      layout: "index",
      parent: "seeding",
      breadcrumbs: [
        {
          name: "Расчёты",
          url: "/calculation",
        },
        {
          name: "Калькулятор расчёта грядок овощей",
          url: "/seeding",
        },
      ],
    },
    component: () => import("../views/SeedingPage.vue"),
  },
  {
    path: "/calculation/feed",
    name: "calculationFeed",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "seeding",
      breadcrumbs: [
        {
          name: "Расчёты",
          url: "/seeding",
        },
        {
          name: "Калькулятор посева томатов / выращивание томатов по технологии",
          url: "/seeding",
        },
      ],
    },
    component: () => import("../views/SeedingPage.vue"),
  },
  {
    path: "/calculation/weight-control",
    name: "calculationWeightControl",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "seeding",
      breadcrumbs: [
        {
          name: "Расчёты",
          url: "/seeding",
        },
        {
          name: "Контроль веса",
          url: "/seeding",
        },
      ],
    },
    component: () => import("../views/SeedingPage.vue"),
  },
  {
    path: "/calculation/bisnes-plans",
    name: "calculationBisnesPlans",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "seeding",
      breadcrumbs: [
        {
          name: "Расчёты",
          url: "/seeding",
        },
        {
          name: "Контроль веса",
          url: "/seeding",
        },
      ],
    },
    component: () => import("../views/SeedingPage.vue"),
  },
  {
    path: "/calculation/all-users",
    name: "calculationAllUsers",
    meta: {
      requiresAuth: false,
      title: "Последние расчёты посльзователей социальной сети",
      layout: "index",
      parent: "seeding",
      breadcrumbs: [
        {
          name: "Расчёты",
          url: "/seeding",
        },
        {
          name: "Контроль веса",
          url: "/seeding",
        },
      ],
    },
    component: () => import("../views/SeedingPage.vue"),
  },
  {
    path: "/сalendars",
    name: "сalendars",
    meta: { requiresAuth: false, layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/task-list",
    name: "taskList",
    meta: { requiresAuth: false, parent: "сalendars", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/recomendations",
    name: "recomendations",
    meta: { requiresAuth: false, parent: "сalendars", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/user-tasks",
    name: "userTasks",
    meta: { requiresAuth: false, parent: "сalendars", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/add-task",
    name: "addTask",
    meta: { requiresAuth: false, parent: "сalendars", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/account",
    name: "account",
    meta: { requiresAuth: false, layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { requiresAuth: false, parent: "account", layout: "index" },
    component: () => import("../views/auth/LoginPage.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    meta: { requiresAuth: false, parent: "account", layout: "index" },
    component: () => import("../views/auth/RegistrationPage.vue"),
  },
  {
    path: "/notifications",
    name: "notifications",
    meta: { requiresAuth: false, parent: "account", layout: "index" },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      requiresAuth: false,
      layout: "index",
      parent: "account",
    },
    component: () => import("@/views/auth/LogoutPage.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      requiresAuth: true,
      title: "Личный кабинет пользователя",
      layout: "index",
      parent: "account",
      breadcrumbs: [
        {
          name: "Личный кабинет",
          url: "/dashboard",
        },
      ],
    },
    component: () => import("@/views/dashboard/Dashboard.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    meta: {
      requiresAuth: false,
      title: "Восстановление пароля",
      layout: "index",
      parent: "account",
      breadcrumbs: [
        {
          name: "Восстановление пароля",
          url: "/forgot-password",
        },
      ],
    },
    component: () =>
      import(
        /* webpackChunkName: "ForgotPassword" */ "@/views/ForgotPassword.vue"
      ),
  },
  {
    path: "/404",
    name: "notFound",
    meta: {
      requiresAuth: false,
      layout: "index",
      title: "404: Такой страницы не существует",
    },
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => {
      // catch all redirect to 404
      return { name: "notFound" };
    },
  },
];
