<template>
  <div>
    <section class="main">
      <div>
        <UserInfo />
      </div>
      <div></div>
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
}
</style>
