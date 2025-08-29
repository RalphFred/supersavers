<template>
  <div class="max-w-7xl mx-auto">
    <div class="py-4 bg-white px-4">
      <button @click="goBack" class="flex items-center gap-2">
        <ChevronLeft />
        <span class="text-xl font-semibold">{{ $t('product.title') }}</span>
      </button>
    </div>
    <!-- Loading/Error states -->
    <div v-if="loading" class="px-4 py-2">{{ $t('common.loading') }}</div>
    <div v-else-if="error" class="px-4 py-2 text-red-600">
      {{ $t('common.error') }}: {{ error.message }}
    </div>

    <!-- Product Gallery -->
    <div v-if="images.length" class="select-none px-4 mb-4">
      <!-- Main image -->
      <div
        class="relative bg-white rounded-xl overflow-hidden"
        @touchstart="onTouchStart"
        @touchmove.prevent="onTouchMove"
        @touchend="onTouchEnd"
      >
        <img
          :src="currentImage"
          :alt="product ? product.name : ''"
          class="w-full h-[520px] object-cover"
          draggable="false"
        />

        <!-- Prev/Next (optional on desktop) -->
        <button
          class="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
          @click="prev"
          :title="$t('product.previous')"
        >
          ‹
        </button>
        <button
          class="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
          @click="next"
          :title="$t('product.next')"
        >
          ›
        </button>
      </div>

      <!-- Thumbnails -->
      <div class="mt-4 flex gap-3 overflow-x-auto scrollbar-hide">
        <button
          v-for="(img, i) in images"
          :key="i"
          @click="go(i)"
          class="shrink-0 w-20 h-20 mb-4 rounded-xl overflow-hidden border-2"
          :class="
            i === index
              ? 'border-orange-500 ring-2 ring-orange-300'
              : 'border-transparent'
          "
        >
          <img
            :src="img"
            class="w-full h-full object-cover"
            :alt="`${$t('product.image')} ${i + 1}`"
            draggable="false"
          />
        </button>
      </div>
    </div>

    <!-- Product Details -->
    <div v-if="product" class="px-4 space-y-2">
      <h1 class="text-2xl font-bold">
        {{ formatPrice(product.price) }}
      </h1>
      <h1 class="text-2xl font-semibold">{{ product.name }}</h1>
      <p class="text-gray-600">{{ product.description }}</p>
    </div>

    <div class="flex items-center justify-center gap-2 px-4 mt-4">
      <button
        class="bg-primary-1 text-white w-12 h-12 flex items-center justify-center rounded-md"
        @click="decreaseQuantity"
        :title="$t('product.decrease_quantity')"
      >
        <Minus />
      </button>
      <input
        type="number"
        class="text-2xl font-semibold flex-1 text-center w-20"
        v-model="quantity"
        min="1"
        :aria-label="$t('product.quantity')"
      />
      <button
        class="bg-primary-1 text-white w-12 h-12 flex items-center justify-center rounded-md"
        @click="increaseQuantity"
        :title="$t('product.increase_quantity')"
      >
        <Plus />
      </button>
    </div>

    <div class="px-4 mt-4 mb-8">
      <button
        class="bg-primary-1 text-white px-4 py-3 rounded-md w-full"
        @click="addToCart"
      >
        {{ $t('product.add_to_cart') }}
      </button>
    </div>
  </div>
</template>

<script>
import { ChevronLeft, Minus, Plus } from "lucide-vue";
import { fetchProductById } from "@/data/products";

export default {
  name: "ProductGallery",
  components: { ChevronLeft, Minus, Plus },
  props: { id: { type: [String, Number], required: true } },
  data() {
    return {
      product: null,
      images: [],
      index: 0,
      startX: 0,
      deltaX: 0,
      swipeThreshold: 40,
      loading: true,
      error: null,
      quantity: 1,
    };
  },
  created() {
    this.load();
  },
  watch: {
    id() {
      this.load();
    },
  },
  computed: {
    currentImage() {
      return this.images[this.index];
    },
  },
  methods: {
    async load() {
      try {
        this.loading = true;
        const p = await fetchProductById(this.id);
        if (!p) throw new Error("Product not found");
        this.product = p;
        this.images = p.image || [];
        this.index = 0;
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
    goBack() {
      if (window.history.length > 1) this.$router.back();
      else this.$router.push({ name: "Home" });
    },
    go(i) {
      if (this.images.length)
        this.index = (i + this.images.length) % this.images.length;
    },
    next() {
      this.go(this.index + 1);
    },
    prev() {
      this.go(this.index - 1);
    },
    onTouchStart(e) {
      this.startX = e.touches[0].clientX;
      this.deltaX = 0;
    },
    onTouchMove(e) {
      this.deltaX = e.touches[0].clientX - this.startX;
    },
    onTouchEnd() {
      if (Math.abs(this.deltaX) > this.swipeThreshold)
        this.deltaX < 0 ? this.next() : this.prev();
      this.startX = 0;
      this.deltaX = 0;
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
        'en': 'NGN',
        'fr': 'EUR',
        'ar': 'SAR'
      }
      return currencyMap[this.$i18n.locale] || 'NGN'
    },
    addToCart() {
      const productWithQuantity = {
        ...this.product,
        quantity: this.quantity,
      };
      this.$store.commit("addToCart", productWithQuantity);
      this.$toast.success(this.$t('product.added_to_cart'), {
        position: "top",
        duration: 3000,
      });
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>
