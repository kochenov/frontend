<template>
  <RightSidebarLayout>
    <template v-slot:content>
      <TabsWrap
        currentComponent="Registration"
        :boxComponents="[
          {
            nameComponent: 'Registration',
            title: 'Регистрация',
          },
        ]"
      >
        <FormGrid class="p10">
          <FlashMessage :errorMessage="authError" />

          <RowInput>
            <InputForm
              idLabel="name"
              typeInput="text"
              :modelValue="name"
              placeholder="Введите Имя"
              @update:modelValue="(e) => (name = e)"
            />
          </RowInput>
          <RowInput>
            <InputForm
              idLabel="email"
              typeInput="email"
              :modelValue="email"
              placeholder="Введите email"
              @update:modelValue="(e) => (email = e)"
            />
          </RowInput>
          <RowInput>
            <InputForm
              idLabel="password"
              typeInput="password"
              :modelValue="password"
              placeholder="Введите пароль"
              @update:modelValue="(e) => (password = e)"
            />
            <InputForm
              idLabel="password-сonfirm"
              typeInput="password"
              :modelValue="passwordConfirm"
              placeholder="Повторите пароль"
              @update:modelValue="(e) => (passwordConfirm = e)"
            />
          </RowInput>
          <RowInput class="center">
            <ButtonExp class="center" @click.prevent="registration()">
              Регистрация
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
import { useRouter } from "vue-router";
import { getError } from "@/utils/helpers";
import AuthService from "@/services/AuthService";

import TabsWrap from "@/components/block/tabs/TabsWrap.vue";
import RightSidebarLayout from "@/views/layouts/pages/RightSidebarLayout.vue";

import FormGrid from "@/components/ui/form/FormGrid.vue";
import RowInput from "@/components/ui/form/RowInput.vue";
import InputForm from "@/components/ui/form/InputForm.vue";

import ButtonExp from "@/components/ui/button/ButtonExp.vue";
import FlashMessage from "@/components/ui/FlashMessage.vue";

const router = useRouter();

const name = ref(null);
const email = ref(null);
const password = ref(null);
const passwordConfirm = ref(null);
const authError = ref(null);

const registration = async () => {
  authError.value = null;
  const payload = {
    name: name.value,
    email: email.value,
    password: password.value,
    password_confirmation: passwordConfirm.value,
  };
  try {
    await AuthService.registerUser(payload);
    router.push("/dashboard");
  } catch (error) {
    authError.value = getError(error);
  }
  console.log("Регистрация");
};
</script>

<style lang="scss" scoped>
.center {
  justify-content: center;
}

.p10 {
  padding: 0 10%;
}
</style>
