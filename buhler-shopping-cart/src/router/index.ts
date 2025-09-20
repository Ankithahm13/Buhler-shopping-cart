import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import ProductList from "../common/ProductList.vue";
import ProductDetail from "../common/ProductDetail.vue";
import Checkout from "../common/Checkout.vue";
import NotFound from "../common/NotFound.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    component: ProductList,
  },

  {
    path: "/products/:id",
    component: ProductDetail,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path:"/:pathMatch(.*)*",
    component: NotFound
  }

];

export default createRouter({
  history: createWebHistory(),
  routes,
});
