<template>
  <div id="app" class="font-montserrat">
    <nav class="max-w-7xl mx-auto py-4 flex justify-between items-center px-4">
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" class="size-12" />
        </div>
      </router-link>

      <div class="flex items-center gap-4">
        <LanguageSwitcher />
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

    <footer>
      <div
        class="max-w-7xl mx-auto py-8 px-4 bg-primary-1 text-white"
      >
        <div class="flex justify-center items-center">
          <div class="text-2xl font-bold flex items-center gap-2">
            <img
              src="@/assets/logo-white.png"
              alt="logo"
              class="size-12"
            /><span class=""> SUPERSAVERS </span>
          </div>
        </div>

        <!-- <div class="mt-4 text-center">
          Built by <a href="https://www.raphaels.studio/" target="_blank" class="bg-primary-2 text-primary-1 rounded-full px-2 py-1 mx-2">me</a>
        </div> -->
      </div>
    </footer>
  </div>
</template>

<script>
import { Heart, ShoppingCart } from "lucide-vue";
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: "App",
  components: {
    Heart,
    ShoppingCart,
    LanguageSwitcher
  },
};
</script>

<style></style>
