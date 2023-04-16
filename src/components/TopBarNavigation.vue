<template>
  <div class="container__top-bar">
    <div class="header">
      <img src="#" />
      <InputText class="search" placeholder="Search" />
      <div class="auth">
        <a class="login" href="#">login</a>
        <a class="signup" href="#">signup</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import { ref } from "vue";
const name = ref();
</script>

<style scoped>
.container__top-bar {
  width: 100%;
  background-color: var(--top-bar);
}

.header {
  display: flex;
  justify-content: space-between;
  border: aliceblue 1px solid;
  align-items: center;
  padding: 0px 50px 0px 50px;
}
.auth {
  display: flex;
  justify-items: space-between;
  gap: 20px;
}
.search {
  height: 50%;
  border-radius: 30px;
}
a {
  color: green;
  text-decoration: none;
}
a:active {
  color: none;
}
</style>
