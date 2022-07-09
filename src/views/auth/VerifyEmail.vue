<template>
  <RightSidebarLayout>
    <template v-slot:content>
      <TabsWrap
        :boxComponents="[
          {
            title: 'Подтвердить почту',
          },
        ]"
      >
        <FormGrid @submit.prevent="sendVerification">
          <FlashMessage :message="message" :errorMessage="authError" />

          <RowInput>
            <ButtonExp> Подтверждение Email </ButtonExp>
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
import AuthService from "@/services/AuthService";
import { getError } from "@/utils/helpers";

import TabsWrap from "@/components/block/tabs/TabsWrap.vue";
import RightSidebarLayout from "@/views/layouts/pages/RightSidebarLayout.vue";

import FormGrid from "@/components/ui/form/FormGrid.vue";
import RowInput from "@/components/ui/form/RowInput.vue";
import InputForm from "@/components/ui/form/InputForm.vue";

import ButtonExp from "@/components/ui/button/ButtonExp.vue";
import FlashMessage from "@/components/ui/FlashMessage.vue";

const authStore = useAuth();
const authError = ref(null);
const message = ref(null);

async function sendVerification() {
  authError.value = null;
  message.value = null;
  const payload = {
    user: authStore.user.id,
  };
  try {
    const response = await AuthService.sendVerification(payload);
    message.value = response.data.status;
  } catch (error) {
    authError.value = getError(error);
  }
}
</script>

<style lang="scss" scoped>
.center {
  justify-content: center;
}

.p10 {
  padding: 0 10%;
}
</style>
