import { createRouter, createWebHistory } from "vue-router";
import DocumentComfirmationVue from "@/views/DocumentComfirmation.vue";
// import headerOfMainPageVue from "@/views/headerOfMainPage.vue";
import DeliveryLogin from "@/views/DeliveryLogin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DocumentComfirmationVue,
    },
    {
      path: "/deliveryLogin",
      name: "dlogin",
      component: DeliveryLogin,
    },
  ],
});

export default router;
