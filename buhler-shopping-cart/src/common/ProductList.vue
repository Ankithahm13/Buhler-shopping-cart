<script setup="ts">
import { computed } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import productsData from "../assets/products.json";
import { PRODUCT_CATEGORY } from "../utils/constants";
import cart from "../assets/cart.vue";
import {productCategory} from "../utils/productCategory";

const groupedProductByCategory = computed(() => {
  return productsData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
});

</script>
<template>
  <HeaderComponent />
  <div class="product-section-container">
    <div
      v-for="(items, category) in groupedProductByCategory"
      :key="category"
      class="product-section"
    >
      <h4>{{ productCategory(category) }}</h4>
      <div class="grid">
        <div
          v-for="product in items"
          :key="product.id"
          class="card"
          @click="$router.push(`/products/${product.id}`)"
        >
          <div class="image-section">
            <img
              :src="product.imageUrl"
              alt=""
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
          <div class="product-card-info">
            <div><strong>{{ product.name }}</strong></div>
            <div class="price-info">
              <div> x{{ product.price.toFixed(2) }}</div>
             
              <cart class="cart-logo"/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-section-container {
  flex: 1;
  overflow: auto;
  padding: 20px 40px;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px !important;
}
.card {
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 200px;
  box-sizing: border-box;
  background-color: #f3f3f3;
  border: 2px solid #dadada;
  cursor: pointer;
  color: #009b91;
}
.product-section {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top:40px;
}
.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 10px;
  min-width: 0;
  min-height: 0;
}
.card:hover {
  border-color: #009b91;
}
.product-card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 25%;
  box-sizing: border-box;
  padding: 5px 20px;
  gap: 10px;
  color: #009b91;
  background-color: #dadada;
  font-size: 12px;
}
.price-info{
  display: flex;
  width:100%;
  align-items: center;
  justify-content: space-between;
}
</style>
