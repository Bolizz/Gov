import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import InputText from "primevue/inputtext";

import "./assets/base.css";

const app = createApp(App);

app.component("InputText", InputText);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount("#app");
