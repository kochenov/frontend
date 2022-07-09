<template>
  <RightSidebarLayout>
    <template v-slot:content>
      <TabsWrap
        :boxComponents="[
          {
            title: 'Ошибка 404',
          },
        ]"
      >
        <p>Страница, которую вы ищете, здесь нет.</p>
      </TabsWrap>
    </template>
  </RightSidebarLayout>
</template>

<script setup>
import RightSidebarLayout from "@/views/layouts/pages/RightSidebarLayout.vue";
import TabsWrap from "@/components/block/tabs/TabsWrap.vue";
</script>

<style lang="scss" scoped>
p {
  font-size: 24px;
}
</style>
