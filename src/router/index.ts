import { createRouter, createWebHistory } from "vue-router";
import DocumentComfirmationVue from "@/views/DocumentComfirmation.vue";
import headerOfMainPageVue from "@/views/headerOfMainPage.vue";
import getIIN from "@/views/getIIN.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DocumentComfirmationVue,
    },
    {
      path: "/home",
      name: "header",
      component: headerOfMainPageVue,
    },
    {
      path: "/getIIN",
      name: "data",
      component: getIIN,
    },
  ],
});

export default router;
