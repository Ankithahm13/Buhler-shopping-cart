import { defineStore } from "pinia";
import type { Product } from "../productDetailsType";

export interface storeModel {
  items: Product[];
  toastMessage : string,
  showToast : boolean
}

export const useStore = defineStore("cart", {
  state: (): storeModel => ({
    items: [],
    toastMessage: '',
    showToast: false
  }),
  getters: {
    count: (state) => state.items.length,
    total: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
  },
  actions: {
    addToCart(product: Product) {
      this.items.push(product);
      this.toastMessage = `${product.name} added to cart successfully`
      this.showToast = true;

      setTimeout(()=>{
        this.showToast = false;
      }, 3000) 
    },
    removeFromCart(index: number) {
      this.items.splice(index, 1);
    },
  },
});
