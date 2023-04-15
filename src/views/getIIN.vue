<template>
  <div class="app">
    <div class="form">
      <h3>Введите ИИН чтобы получить документ</h3>
      <input type="number" v-model="value" class="get-data" placeholder="ИИН">
      <Button label="Submit" outlined />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { ref } from 'vue';

const value = ref(Number);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: aliceblue;
} 
.app{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 12px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  display: flex;
  flex-direction: column;
}
.get-data{
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
input[type=number] {
  -moz-appearance: textfield;
}
</style>