<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref, computed } from "vue";

const iin = ref("");
const password = ref("");
const submitted = ref(false);

const CheckEmail = computed(() => {
  if (iin.value === "" || iin.value.trim() === "") {
    return true;
  }
  return false;
});

const submit = () => {};
</script>

<template>
  <div class="container">
    <h1 class="bas">Login</h1>
    <div class="inputpart">
      <InputText
        v-model="email"
        class="login email"
        :class="{ 'p-invalid': CheckEmail }"
        placeholder="Электронная почта"
      />
      <Password v-model="password" toggleMask :feedback="false" />
    </div>
    <div class="password"></div>
    <div class="logpart">
      <a class="forgot" href="#">Забыли пароль?</a>
      <button class="logBut">login</button>
    </div>
  </div>
  <footer>Нет аккаунта? <a>Присоединяйся сейчас</a></footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  background-color: aliceblue;
}
.bas {
  text-align: center;
}
.container {
  display: grid;
  grid-template-rows: (2, 1fr);
  justify-content: center;
  margin-top: 200px;
  gap: 30px;
}
footer {
  margin-top: 100px;
  display: flex;
  gap: 20px;
  justify-content: center;
}
.inputpart {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.logpart {
  display: flex;
  flex-direction: column;
}
.logBut {
  margin: 20px 30px 0px 30px;
  height: 50px;
  border: black 1px solid;
  color: aliceblue;
  background-color: gray;
  border-radius: 12px;
}
.forgot {
  display: flex;
  justify-content: end;
  color: gray;
  text-decoration: none;
}
a:active {
  color: gray;
}
</style>
