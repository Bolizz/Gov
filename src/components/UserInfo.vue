<template>
  <div class="user-info">
    <p class="subhead-topic">Информация о пользователе</p>
    <div>
      <InputText disabled v-bind:placeholder="nameOfUser" class="input-field" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const nameOfUser = ref("Almaz");
</script>

<style scoped>
.user-info {
  padding: 1rem;
}
</style>
