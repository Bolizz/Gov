import { createRouter, createWebHistory } from "vue-router";
import DocumentComfirmationVue from "@/views/DocumentComfirmation.vue";
// import headerOfMainPageVue from "@/views/headerOfMainPage.vue";
import DeliveryLogin from "@/views/DeliveryLogin.vue";
import getIIN from "@/views/getIIN.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/document-request/:userData",
      name: "home",
      component: DocumentComfirmationVue,
    },
    {
      path: "/deliveryLogin",
      name: "dlogin",
      component: DeliveryLogin,
    },
    {
      path: "/document-request/:userData/address-fillup/",
      name: "address",
      component: DocumentComfirmationVue,
    },
      path: "/getIIN",
      name: "data",
      component: getIIN,
    },
  ],
});

export default router;
