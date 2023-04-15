import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Button from "primevue/button";
import Password from "primevue/password";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import InputText from "primevue/inputtext";

import "./assets/base.css";

const app = createApp(App);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("Password", Password);
app.use(createPinia());

app.use(PrimeVue);
app.use(router);
app.mount("#app");
