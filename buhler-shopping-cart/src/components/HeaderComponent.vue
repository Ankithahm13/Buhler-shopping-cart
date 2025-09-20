<script setup="ts">
import { ref, onMounted, computed } from "vue";
import { useStore } from "../store/cart";
import cart from "../assets/cart.vue"

const currentDateTime = ref(new Date());

const formattedTime = computed(() => formatCustom(currentDateTime.value));
const store = useStore();

const formatCustom = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const periodic = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${periodic}`;
};

onMounted(() => {
  setInterval(() => {
    currentDateTime.value = new Date();
  }, 1000);
});
</script>
<template>
  <div class="header-section">
    <header class="header">
      <img
        src="..\assets\buhler-logo.svg"
        alt="Buhler"
        class="logo"
        @click="$router.push('/products')"
      />
      <div class="date-time">{{ formattedTime }}</div>
      <div class="cart" @click="$router.push('/checkout')">
        <cart class="cart-logo"/>
       <div> Cart ({{store.count}}) </div>
       
    </div>
    </header>
  </div>
</template>

<style scoped>
.header-section{
    height:50px;
}
.header {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100% !important;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 15px;
  border-bottom: 1px solid #009b91;
  gap: 8px;
}
.logo {
  cursor: pointer;
  height:30px;
  width:150px;
}
.date-time {
  font-size: 18px;
  color: #009b91;
}
.cart {
  color: #009b91;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap:5px;
}

</style>
