import HomePage from '@/components/HomePage.vue'
import ShopPage from '@/components/ShopPage.vue'
import CartPage from '@/components/CartPage.vue'
import FavoritePage from '@/components/FavoritePage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = HomePage
const Shop = ShopPage
const Cart = CartPage
const Favorite = FavoritePage

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router