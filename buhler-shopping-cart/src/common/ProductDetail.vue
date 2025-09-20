<script setup="ts">
import HeaderComponent from "../components/HeaderComponent.vue";
import productsData from "../assets/products.json";
import { useRoute } from "vue-router";
import { useStore } from "../store/cart";
import { productCategory } from "../utils/productCategory";
import cart from "../assets/cart.vue"
import Toast from "./Toast.vue";
const route = useRoute();
const selectedProduct = productsData.find(
  (item) => item.id === route.params.id
);
const store = useStore();
</script>
<template>
  <div>
    <HeaderComponent />
    <div class="product-detail-container">
      <div class="product-detail-section">
        <div class="back-button" @click="$router.push('/products')">Back</div>
        <div class="detail-section">
          <div>
            <img
              :src="selectedProduct.imageUrl"
              alt="image"
              style="object-fit: cover; width: 250px; height: 250px"
            />
          </div>
          <div class="detail-info-section">
            <div class="detail-info">
              <h3>{{ selectedProduct.name }}</h3>
              <div>{{ productCategory(selectedProduct.category) }}</div>
              <div>x{{ selectedProduct.price.toFixed(2) }}</div>
            </div>
            <div class="cart-section" @click="store.addToCart(selectedProduct)">
              <cart class="cart-logo" />
              <div>Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Toast v-if="store.showToast"/>
  </div>
</template>

<style scoped>
.product-detail-container {
  flex: 1;
  overflow: auto;
  padding: 20px 40px;
}
.product-detail-section {
  display: flex;
  flex-direction: column;
  gap: 58px;
}
.back-button {
  color: #009b91;
  cursor: pointer;
}
.detail-section {
  display: flex;
  gap: 48px;
}
.detail-info-section {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px 0;
  justify-content: space-between !important;
  color: #009b91;
}
.detail-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.cart-section {
  display: flex;
  gap: 10px;
  cursor: pointer;
  white-space: nowrap;
  align-items: center;
}
</style>
