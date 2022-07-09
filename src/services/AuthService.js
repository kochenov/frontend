import axios from "axios";
// url на котором находится Laravel API
const apiUrl = import.meta.env.VITE_APP_API_URL;

// настройки AXIOS
export const authClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true, // требуется для обработки токена CSRF
});

/*
 * Добавьте перехватчик ответов
 */
authClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [401, 419].includes(error.response.status)) {
      console.info(
        "[401, 419]: Пользователь не авторизован, не удалось войти в систему с помощью API",
      );
    }
    return Promise.reject(error);
  },
);

export default {
  async login(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    console.log("jghhgj");
    return authClient.post("/login", payload);
  },
  logout() {
    return authClient.post("/logout");
  },
  async forgotPassword(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/forgot-password", payload);
  },
  getAuthUser() {
    return authClient.get("/api/user");
  },
  async resetPassword(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/reset-password", payload);
  },
  async registerUser(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/register", payload);
  },
  sendVerification(payload) {
    return authClient.post("/email/verification-notification", payload);
  },
};
