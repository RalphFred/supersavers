<template>
    <div class="w-full max-w-7xl mx-auto mt-8 px-4">
        
        <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold">Featured</h2>
            <p class="text-sm font-semibold text-primary-1">View All</p>
        </div>

        <div class="mt-4 flex gap-4 overflow-x-scroll scrollbar-hide">
            <PreviewCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import PreviewCard from './PreviewCard.vue';
import { fetchProductsByTag } from '@/data/products';

export default {
    name: 'HomeFeatured',
    components: {
        PreviewCard
    },
    data() {
        return {
            products: []
        }
    },
    async created() {
        this.products = await fetchProductsByTag("FEATURED");
    }
}
</script>