import { createRouter, createWebHistory } from "vue-router";
import DocumentComfirmationVue from "@/views/DocumentComfirmation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DocumentComfirmationVue,
    },
  ],
});

export default router;
