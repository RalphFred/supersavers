<template>
  <router-link :to="`/product/${product.id}`">
    <div class="w-48 shrink-0 mb-10 space-y-2">
      <img
        :src="product.image[0]"
        alt="Preview"
        class="w-full h-60 object-contain rounded-xl"
      />
      <p class="text-sm font-semibold mt-2 text-primary-1">
        {{ product.tags[0] }}
      </p>
      <p class="truncate line-clamp-1">
        {{ product.name }}
      </p>
      <p class="text-neutral-900 text-lg font-semibold">
        {{ formatPrice(product.price) }}
      </p>
    </div>
  </router-link>
</template>

<script>
function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "NGN",
  });
}

export default {
  name: "PreviewCard",
  methods: {
    formatPrice,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
