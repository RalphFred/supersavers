<template>
    <div class="w-full max-w-7xl mx-auto mt-4 px-4">
        <h2 class="text-2xl font-semibold">Categories</h2>

        <div class="mt-2">
            <router-link to="/shop">
                <span class="inline-block bg-neutral-100 text-neutral-800 cursor-pointer rounded-lg px-4 py-1.5">
                    All
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeCategories'
}
</script>