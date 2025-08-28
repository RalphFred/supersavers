<template>
  <div id="app">
    <nav class="max-w-7xl mx-auto py-4 flex justify-between items-center">
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" class="size-12" />
        </div>
      </router-link>

      <div class="flex items-center gap-4">
        <router-link to="/favorite">
          <span class="inline-block bg-primary-2 rounded-full p-2">
            <Heart class="size-6 text-primary-1" />
          </span>
        </router-link>
        <router-link to="/cart"
          ><span class="inline-block bg-primary-2 rounded-full p-2">
            <ShoppingCart class="size-6 text-primary-1" /> </span
        ></router-link>
      </div>
    </nav>

    <router-view />

    <footer></footer>
  </div>
</template>

<script>
import { Heart, ShoppingCart } from "lucide-vue";

export default {
  name: "App",
  components: {
    Heart,
    ShoppingCart,
  },
};
</script>

<style></style>
