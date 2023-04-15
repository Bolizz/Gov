<template>
    <div class="app">
        <div class="form">
            <div class="info">
                <h1>Эффективная курьерская платформа для доставка государственных документов</h1>
            </div>
            <div class="image">
                <img src="../image/welcome_icon.png">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

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
    justify-content: center;
    display: flex;
    gap: 10px;
}
.info{
    width: 40%;
}
</style>