<template>
  <RightSidebarLayout>
    <template v-slot:content>
      <TabsWrap
        :currentComponent="isComponent"
        :boxComponents="metaInfo"
        :tabs="true"
        @setCurrentComponent="
          (c) => {
            isComponent = c;
          }
        "
      >
        <component :is="object(isComponent)" />
      </TabsWrap>
    </template>
    <template v-slot:sidebar> Это сидебар </template>
  </RightSidebarLayout>
</template>

<script setup>
import { ref } from "vue";

import TabsWrap from "@/components/block/tabs/TabsWrap.vue";
import RightSidebarLayout from "./layouts/pages/RightSidebarLayout.vue";

//import FormSeeding from "@/components/parts/seeding/FormSeeding.vue";
//import HistorySeeding from "@/components/parts/seeding/HistorySeeding.vue";
//import UserSeeding from "@/components/parts/seeding/UserSeeding.vue";
//import ListVegetable from "@/components/block/sidebar/ListVegetable.vue";

const isComponent = ref("FormSeeding");
const metaInfo = [
  {
    nameComponent: "FormSeeding",
    title: "Калькулятор размера грядок",
    menu: "Расчёт",
    flag: "",
  },
  {
    nameComponent: "HistorySeeding",
    title: "История рассчётов",
    menu: "История",
    flag: "box-new",
  },
  {
    nameComponent: "UserSeeding",
    title: "Мои посадки",
    menu: "Мои посадки",
    flag: "box-popular",
  },
];
</script>

<style lang="scss" scoped></style>
