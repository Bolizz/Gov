<template>
  <div class="app">
    <InputNumber v-model="value" inputId="IIN" />
    <Button label="Submit" />
  </div>
</template>

<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
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
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>