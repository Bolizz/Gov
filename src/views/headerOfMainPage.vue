<template>
  <div class="container">
    <div class="header">
      <img src="#" />
      <InputText class="search" placeholder="Search" />
      <div class="auth">
        <a class="login" href="#">login</a>
        <a class="signup" href="#">signup</a>
      </div>
    </div>
    <div class="mainbody">mainbody</div>
    <div class="footer">footer</div>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import { ref } from "vue";
const data = ref({});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: aliceblue;
}
.container {
  display: grid;
  grid-template-rows: (3, 1fr);
}
.header {
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  align-items: center;
  padding: 10px;
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
}
a:active {
  color: none;
}
</style>
