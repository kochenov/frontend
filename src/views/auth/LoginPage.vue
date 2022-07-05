<template>
  <RightSidebarLayout>
    <template v-slot:content>
      <TabsWrap
        :boxComponents="[
          {
            title: 'Вход в личный кабинет',
          },
        ]"
      >
        <FormGrid>
          <FlashMessage :errorMessage="authStore.error" />

          <RowInput>
            <InputForm
              idLabel="email"
              typeInput="email"
              :modelValue="email"
              placeholder="Введите email"
              @update:modelValue="(e) => (email = e)"
            />
            <InputForm
              idLabel="password"
              typeInput="password"
              :modelValue="password"
              placeholder="Введите пароль"
              @update:modelValue="(e) => (password = e)"
            />
            <ButtonExp @click.prevent="authStore.login({ email, password })">
              Вход
            </ButtonExp>
          </RowInput>
        </FormGrid>
      </TabsWrap>
    </template>
    <template v-slot:sidebar>dwd </template>
  </RightSidebarLayout>
</template>

<script setup>
import { ref } from "vue";

import { useAuth } from "@/stores/authStore";

import TabsWrap from "@/components/block/tabs/TabsWrap.vue";
import RightSidebarLayout from "@/views/layouts/pages/RightSidebarLayout.vue";

import FormGrid from "@/components/ui/form/FormGrid.vue";
import RowInput from "@/components/ui/form/RowInput.vue";
import InputForm from "@/components/ui/form/InputForm.vue";

import ButtonExp from "@/components/ui/button/ButtonExp.vue";
import FlashMessage from "@/components/ui/FlashMessage.vue";

const authStore = useAuth();
const email = ref(null);
const password = ref(null);
</script>

<style lang="scss" scoped>
.center {
  justify-content: center;
}

.p10 {
  padding: 0 10%;
}
</style>
