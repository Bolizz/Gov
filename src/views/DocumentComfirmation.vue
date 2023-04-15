<template>
  <div>
    <section class="main">
      <div class="column-one">
        <UserInfo />
      </div>
      <div class="column-two"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import UserInfo from "@/components/UserInfo.vue";
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  gap: 3rem;
  padding-top: 3rem;
}

.column-one {
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.column-two {
  width: 470px;
}
</style>
