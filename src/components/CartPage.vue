<template>
  <div>
    <div class="py-4 bg-white px-4">
      <button @click="goBack" class="flex items-center gap-2">
        <ChevronLeft />
        <span class="text-xl font-semibold">{{ $t('cart.title') }}</span>
      </button>
    </div>

    <!-- Empty cart state -->
    <div v-if="isCartEmpty" class="p-8 text-center">
      <div class="text-gray-500 text-lg mb-4">{{ $t('cart.empty') }}</div>
      <router-link 
        to="/" 
        class="bg-primary-1 text-white px-6 py-3 rounded-lg inline-block"
      >
        {{ $t('cart.continue_shopping') }}
      </router-link>
    </div>

    <!-- Cart items -->
    <div v-else class="p-4 bg-gray-100 space-y-4">
      <div 
        v-for="item in cartItems" 
        :key="item.id"
        class="p-4 bg-white rounded-lg"
      >
        <div class="flex gap-4 pb-4">
          <img
            :src="item.image[0]"
            :alt="item.name"
            class="size-24 object-cover rounded-lg"
          />
          <div class="flex gap-4 justify-between items-start flex-1">
            <div class="flex-1">
              <span class="inline-block font-semibold text-lg">{{ item.name }}</span>
              <div class="text-gray-600 mt-1">
                <span class="text-neutral-800 font-semibold">
                  {{ formatPrice(item.price) }}
                </span>
              </div>
            </div>
            <button 
              @click="removeFromCart(item.id)"
              class="text-red-500 hover:text-red-700 transition-colors"
              :title="$t('cart.remove')"
            >
              <Trash2 />
            </button>
          </div>
        </div>
        <div
          class="flex justify-between items-center pt-4 border-t border-gray-200"
        >
          <div class="text-xl font-semibold">
            {{ formatPrice(item.price * item.quantity) }}
          </div>

          <div class="flex items-center gap-2">
            <button 
              @click="updateQuantity(item.id, item.quantity - 1)"
              class="rounded-lg border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
              :disabled="item.quantity <= 1"
              :title="$t('cart.quantity')"
            > 
              <Minus /> 
            </button>
            <span class="inline-block text-center w-8 font-semibold">{{ item.quantity }}</span>
            <button 
              @click="updateQuantity(item.id, item.quantity + 1)"
              class="rounded-lg border border-gray-200 p-2 hover:bg-gray-50 transition-colors"
              :title="$t('cart.quantity')"
            > 
              <Plus /> 
            </button>
          </div>
        </div>
      </div>

      <!-- Cart summary -->
      <div class="p-4 bg-white rounded-lg">
        <div class="flex justify-between items-center py-2">
          <span class="text-lg font-semibold">{{ $t('cart.total_items') }}:</span>
          <span class="text-lg">{{ cartItemCount }}</span>
        </div>
        <div class="flex justify-between items-center py-2 border-t border-gray-200">
          <span class="text-xl font-bold">{{ $t('cart.total') }}:</span>
          <span class="text-2xl font-bold text-primary-1">{{ formatPrice(cartTotal) }}</span>
        </div>
        <button 
          @click="checkout"
          class="w-full bg-primary-1 text-white py-3 rounded-lg font-semibold text-lg mt-4 hover:bg-primary-600 transition-colors"
        >
          {{ $t('cart.checkout') }}
        </button>
        <button 
          @click="clearCart"
          class="w-full border border-gray-300 text-gray-700 py-2 rounded-lg mt-2 hover:bg-gray-50 transition-colors"
        >
          {{ $t('cart.clear_cart') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeft, Trash2, Minus, Plus } from "lucide-vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartPage",
  components: {
    ChevronLeft,
    Trash2,
    Minus,
    Plus,
  },
  computed: {
    ...mapGetters([
      'cartItems',
      'cartItemCount', 
      'cartTotal',
      'isCartEmpty'
    ])
  },
  methods: {
    ...mapActions([
      'removeFromCart',
      'updateCartItemQuantity',
    ]),
    
    goBack() {
      if (window.history.length > 1) this.$router.back();
      else this.$router.push({ name: "Home" });
    },
    
    updateQuantity(productId, quantity) {
      this.updateCartItemQuantity({ productId, quantity });
    },
    
    formatPrice(price) {
      // Use locale-aware formatting
      return new Intl.NumberFormat(this.$i18n.locale, {
        style: 'currency',
        currency: this.getCurrencyForLocale()
      }).format(price)
    },
    
    getCurrencyForLocale() {
      const currencyMap = {
        'en': 'NGN', // Nigerian Naira for your app
        'fr': 'EUR',
        'ar': 'SAR'
      }
      return currencyMap[this.$i18n.locale] || 'NGN'
    },
    
    checkout() {
      // TODO: Implement checkout functionality
      this.$toast.success('Proceeding to checkout...', {
        position: 'top-right',
        duration: 3000
      });
    }
  },
};
</script>
