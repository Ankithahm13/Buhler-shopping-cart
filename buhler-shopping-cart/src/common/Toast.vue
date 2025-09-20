<script setup="ts">
import { useStore } from "../store/cart";
import CheckMark from "./CheckMark.vue";
const store = useStore();
</script>
<template>
    <div v-if="store.showToast" class="toast">
        <div class="toast-section">
            <CheckMark />
            <div>{{ store.toastMessage }}</div>
        </div>
      
    </div>
</template>
<style scoped>
.toast {
  position: fixed;
  top: 50px;
  right: 20px;
  color: green;
  padding: 2px 5px;
  border-radius: 10px;
  font-weight: bold;
  border: 2px solid green;
}
.toast-section{
    display: flex;
    gap:10px;
    align-items: center;
}
</style>
