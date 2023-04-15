import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import App from "./App.vue";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(createPinia());

app.use(PrimeVue);
app.component("InputText", InputText);
app.mount("#app");
