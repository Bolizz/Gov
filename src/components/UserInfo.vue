<template>
  <div class="user-info">
    <p class="subhead-topic">Информация о пользователе</p>
    <hr />
    <div>
      <InputText disabled v-model="iin" class="input-field iin" />
      <div class="user-name">
        <InputText disabled v-model="nameOfUser" class="input-field name" />
        <InputText disabled v-model="surnameOfUser" class="input-field name" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const iin = ref("020214500327");
const nameOfUser = ref("Almaz");
const surnameOfUser = ref("Amanzholuly");
</script>

<style scoped>
.user-info {
  padding: 1rem;
  border-radius: 25px;
  background-color: var(--secondary-background);
}

.iin {
  width: 100%;
  margin-bottom: 1.5rem;
}

.name {
  width: 100%;
  margin-bottom: 1rem;
}

.user-name {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}
</style>
