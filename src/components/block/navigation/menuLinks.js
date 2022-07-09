import { ref } from "vue";

/**
 * Ссылки главного меню
 * TODO: Переместить в STATE MANAGER
 */
export const links = ref([
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
export const subMenu = {
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
