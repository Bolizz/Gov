<template>
  <div class="container__doc-comfirm">
    <p class="header__doc-comfirm">Заполните данные для потверждения заказа</p>
    <section class="main">
      <div class="column-one">
        <UserInfo />
        <div class="user-info">
          <p class="subhead-topic">Детали заказа</p>
          <hr />
          <div class="two-input">
            <div
              style="display: flex; flex-direction: column"
              class="phone-input"
            >
              <label for="phone">Номер телефона</label>
              <InputMask
                v-model="phoneNumber"
                date="phone"
                mask="+7 (999) 999-9999"
                :placeholder="phoneNumber"
                class="input-field"
              />
            </div>

            <div class="contract">
              <label for="contract">Номер контракта</label>
              <InputText
                disabled
                v-model="contractNumber"
                class="input-field"
              />
            </div>
          </div>
          <div class="two-input">
            <div class="contract">
              <label for="service">Сервис</label>
              <InputText disabled v-model="serviceName" class="input-field" />
            </div>
            <div class="contract">
              <label for="department">Департамент</label>
              <InputText disabled v-model="department" class="input-field" />
            </div>
          </div>
        </div>
        <div class="user-info">
          <p class="subhead-topic">Адрес доставки</p>
          <hr />
          <div class="two-input">
            <div class="contract">
              <label for="service">Область</label>
              <InputText v-model="region" class="input-field" />
            </div>
            <div class="contract">
              <label for="city">Город</label>
              <InputText v-model="city" class="input-field" />
            </div>
          </div>
          <div class="two-input">
            <div class="contract">
              <label for="street">Улица</label>
              <InputText v-model="street" class="input-field" />
            </div>
            <div class="contract number-data">
              <label for="houseNumber">Номер дома</label>
              <InputText v-model="houseNumber" class="input-number-field" />
            </div>
            <div class="contract number-data">
              <label for="appartment">Квартира</label>
              <InputText v-model="appartment" class="input-number-field" />
            </div>
            <div class="contract number-data">
              <label for="entry">Подьезд</label>
              <InputText v-model="entry" class="input-number-field" />
            </div>
          </div>
          <div class="two-input">
            <div class="contract">
              <label for="floor">Этаж</label>
              <InputText v-model="floor" class="input-field" />
            </div>
            <div class="contract">
              <label for="block">Корпус</label>
              <InputText v-model="block" class="input-field" />
            </div>
            <div class="contract">
              <label for="JK">Наименование ЖК</label>
              <InputText v-model="JK" class="input-field" />
            </div>
          </div>
          <div class="contract">
            <label for="additionalInfo">Дополнительная информация</label>
            <Textarea v-model="additionalInfo" rows="5" cols="30" />
          </div>
        </div>
      </div>
      <div class="column-two"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import UserInfo from "@/components/UserInfo.vue";
import { ref } from "vue";

const phoneNumber = ref("+7-776-276-0814");
const contractNumber = ref("1341234123412354132523452345234");
const serviceName = ref("Vyda4a prav");
const department = ref("Kerei Janibek 2023");
const region = ref("Central Kazakhstan");
const city = ref("Astana");
const street = ref("Qabanbay Batyr");
const houseNumber = ref("57");
const appartment = ref("13");
const entry = ref("5");
const floor = ref("3");
const block = ref("A block");
const JK = ref("Panorama");
const additionalInfo = ref("");
</script>

<style scoped>
.container__doc-comfirm {
  padding: 5rem;
}

.header__doc-comfirm {
  font-size: 36px;
}
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

.phone-input {
  background-color: var(--color-border);
  width: 50%;
}

.contract {
  display: flex;
  flex-direction: column;
  background-color: var(--color-border);
  width: 100%;
}

.add-info {
  height: 160px;
}
</style>
