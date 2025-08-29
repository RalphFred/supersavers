<template>
    <div class="max-w-7xl mx-auto">
        <HomeBanner />
        <HomeCategories />
        <HomeNewArrival />
        <HomeFeatured />
    </div>
</template>

<script>
import HomeBanner from './shared/HomeBanner.vue';
import HomeCategories from './shared/HomeCategories.vue';
import HomeNewArrival from './shared/HomeNewArrival.vue';
import HomeFeatured from './shared/HomeFeatured.vue';

export default {
    name: 'HomePage',
    components: {
        HomeBanner,
        HomeCategories,
        HomeNewArrival,
        HomeFeatured
    }
}
</script>