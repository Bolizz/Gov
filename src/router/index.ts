import { createRouter, createWebHistory } from "vue-router";
import DocumentComfirmationVue from "@/views/DocumentComfirmation.vue";
// import headerOfMainPageVue from "@/views/headerOfMainPage.vue";
import DeliveryLogin from "@/views/DeliveryLogin.vue";
import getIIN from "@/views/getIIN.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/deliveryLogin",
      name: "dlogin",
      component: DeliveryLogin,
    },
    {
      path: "/document/:iin",
      name: "document-view",
      component: DocumentComfirmationVue,
    },
    {
      path: "/address-fillup",
      name: "address",
      component: DocumentComfirmationVue,
    },
    {
      path: "/getIIN",
      name: "data",
      component: getIIN,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },

  ],
});

export default router;
