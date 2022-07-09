<template>
  <RightSidebarLayout>
    <template v-slot:content>
      <TabsWrap
        :currentComponent="isComponent"
        :tabs="true"
        @setCurrentComponent="
          (c) => {
            isComponent = c;
          }
        "
        :boxComponents="meta"
      >
        {{ isComponent }}
        <component :is="component" />
      </TabsWrap>
    </template>
    <template v-slot:sidebar>
      <TabsWrap
        :boxComponents="[
          {
            title: 'Настройки',
          },
        ]"
      >
        <ul>
          <li>Изменить пароль</li>
          <li>Настройки приватности</li>
        </ul>
      </TabsWrap>
    </template>
  </RightSidebarLayout>
</template>
<script setup>
import { ref, computed } from "vue";
import RightSidebarLayout from "@/views/layouts/pages/RightSidebarLayout.vue";
import TabsWrap from "@/components/block/tabs/TabsWrap.vue";

import { useUser } from "@/stores/userStore";

import MyProfile from "@/views/dashboard/profile/MyProfile.vue";
//import MyProfile from "./profile/MyProfile.vue";

const userStore = useUser();

const isComponent = ref("MyProfile");
const component = computed(() => {
  if (isComponent.value === "MyProfile") return MyProfile;
});
const meta = [
  {
    title: "Профиль",
    nameComponent: "MyProfile",
    menu: "Профиль",
  },
  {
    title: "Мой блог",
    nameComponent: "MyBlog",
    menu: "Мой блог",
  },
  {
    title: "Мои расчёты",
    nameComponent: "MyCalculaters",
    menu: "Мои расчёты",
  },
  {
    title: "Мои расчёты",
    nameComponent: "MyCalculaters",
    menu: "Новость",
  },
];
</script>
<style lang="scss">
.sub-title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}

.items {
  padding: 10px;

  .item {
    padding: 0px 0px 15px 10px;

    i {
      padding-left: 10px;
    }
  }
}
</style>
