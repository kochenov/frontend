<script setup>
import { useAuth } from "@/stores/authStore";

import { onMounted } from "vue";

const authStore = useAuth();
onMounted(() => {
  authStore.logout();
});
</script>
