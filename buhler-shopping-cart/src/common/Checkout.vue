<script setup="ts">
import HeaderComponent from "../components/HeaderComponent.vue";
import { useStore } from "../store/cart";
import remove from "./remove.vue";
import { productCategory } from "../utils/productCategory";
const store = useStore();
</script>
<template>
  <HeaderComponent />
  <div class="product-checkout-container">
    <div class="checkout-container">
      <div class="checkout-details">
         <h3>Checkout</h3>
          <div class="back-btn" @click="$router.push('/products')">
           <h4> Back to Buhler Product </h4>
          </div>
      </div>
     
      <div class="checkout-list-items">
        <div v-for="(item, index) in store.items" :key="index">
          <div class="checkout-section">
            <div class="start-section">
              <img
                :src="item.imageUrl"
                alt="image"
                style="object-fit: cover; height: 100px; width: 100px"
              />
              <div class="checkout-detail">
                <div>{{ item.name }}</div>
                <div>{{ productCategory(item.category) }}</div>
              </div>
            </div>
            <div class="end-section">
              <div>X{{ item.price.toFixed(2) }}</div>
              <div @click="store.removeFromCart(index)">
              <remove/>
              </div>
            </div>
          </div>
        </div>
        <h4 class="total-checkout-section">
          Total : X{{ store.total.toFixed(2) }}
        </h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-checkout-container {
  flex: 1;
  overflow: auto;
  padding: 20px 40px;
  color: #009b91;
}
.checkout-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.checkout-section {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.start-section {
  display: flex;
  gap: 20px;
  align-items: center;
}
.end-section {
  display: flex;
  gap: 40px;
}
.checkout-list-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.checkout-detail {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.total-checkout-section {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.checkout-details{
  display: flex;
  justify-content: space-between;
}
.back-btn{
  cursor: pointer;
}
</style>
