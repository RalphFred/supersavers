<template>
    <div class="w-full max-w-7xl mx-auto mt-4 px-4">
      <!-- Swiper Container -->
      <div class="swiper-container h-auto rounded-2xl overflow-hidden">
        <div class="swiper-wrapper">
          <!-- Map over slides instead of repeating -->
          <div 
            v-for="(slide, index) in slides" 
            :key="index"
            class="swiper-slide"
          >
            <div
              :class="{
                'h-full px-6 py-8 lg:px-12 lg:py-12': true,
                [slide.backgroundColor]: true,
              }"
            >
              <div class="text-white">
                <span class="block text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
                  {{ slide.tag }}
                </span>
                <h1 class="text-3xl lg:text-5xl font-bold leading-tight mb-4">
                  {{ slide.title }}
                </h1>
                <p class="text-lg leading-relaxed mb-8 opacity-90">
                  {{ slide.subtitle }}
                </p>
                <button
                  class="bg-white border-2 px-8 py-2 rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  :style="{
                    borderColor: slide.buttonBorderColor,
                    color: slide.buttonTextColor,
                  }"
                >
                  {{ slide.buttonText }}
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </template>
  
  <script>
  import Swiper from "swiper";
  import "swiper/css/swiper.css";
  
  export default {
    name: "HomeBanner",
    data() {
      return {
        swiper: null,
        // Single array instead of separate objects
        slides: [
          {
            backgroundColor: "bg-blue-500",
            tag: "BEST SELLERS",
            title: "Our Most Popular Products",
            subtitle: "See what everyone is talking about",
            buttonText: "Shop Now",
            buttonBorderColor: "#93C5FD",
            buttonTextColor: "#3B82F6",
          },
          {
            backgroundColor: "bg-green-500",
            tag: "NEW ARRIVALS",
            title: "Checkout the new collection",
            subtitle: "Discover the latest trends",
            buttonText: "Explore",
            buttonBorderColor: "#6EE7B7",
            buttonTextColor: "#10B981",
          },
          {
            backgroundColor: "bg-orange-500",
            tag: "SPECIAL OFFERS",
            title: "Clearance sales is on season.",
            subtitle: "Don't miss out on these savings",
            buttonText: "Get Deals",
            buttonBorderColor: "#FCD34D",
            buttonTextColor: "#F59E0B",
          },
        ],
      };
    },
    mounted() {
      this.initSwiper();
    },
    methods: {
      initSwiper() {
        this.swiper = new Swiper(".swiper-container", {
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      },
    },
    beforeDestroy() {
      if (this.swiper) {
        this.swiper.destroy();
      }
    },
  };
  </script>
  
  <style scoped>
  /* Swiper pagination styling */
  .swiper-pagination {
    bottom: 20px !important;
  }
  
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #d1d5db;
    opacity: 1;
    margin: 0 6px;
  }
  
  .swiper-pagination-bullet-active {
    background: #f6763b;
  }
  </style>