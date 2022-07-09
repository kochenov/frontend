<template>
  <RightSidebarLayout>
    <template v-slot:content>
      <TabsWrap
        :currentComponent="isComponent"
        :boxComponents="[{ title: $route.title }]"
      />
    </template>
    <template v-slot:sidebar> Это сидебар </template>
  </RightSidebarLayout>
</template>

<script setup>
import { ref, onMounted, markRaw } from "vue";
import { useRoute } from "vue-router";

import TabsWrap from "@/components/block/tabs/TabsWrap.vue";
import RightSidebarLayout from "./layouts/pages/RightSidebarLayout.vue";
const route = markRaw(useRoute());
const isComponent = ref("NameComponent 1");
const metaInfo = ref(null);
</script>

<style lang="scss" scoped></style>
