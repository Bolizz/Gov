<template>
  <div class="box__for-welcome">
    <p class="welcome-word">Добро пожаловать!</p>
    <div class="form">
      <h3>Введите ИИН чтобы получить документ</h3>
      <input type="number" v-model="iin" class="get-data" placeholder="ИИН" />
      <button class="button" @click="submitIIN">Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import router from "@/router";

const iin = ref("");

const submitIIN = () => {
  // const router = useRouter();
  router.push({ name: "document-view", params: { iin: iin.value } });
};
</script>

<style scoped>
.box__for-welcome {
  background-color: gray;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.welcome-word {
  background-color: gray;
  font-size: 32px;
  margin-bottom: 2rem;
}
.form {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 12px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  display: flex;
  flex-direction: column;
}
.get-data {
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid var(--color-main);
  border-radius: 4px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.button {
  background-color: var(--color-main);
  border-radius: 6px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: 0.2s;
}
.button:focus {
  opacity: 0.5;
}
</style>
