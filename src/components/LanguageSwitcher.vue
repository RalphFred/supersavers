<template>
    <div class="relative">
      <button 
        @click="toggleDropdown"
        class="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <span class="text-sm font-medium">{{ currentLanguageName }}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div 
        v-if="showDropdown"
        class="absolute top-full right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 min-w-[120px]"
      >
        <button
          v-for="lang in availableLanguages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-sm"
          :class="{ 'bg-primary-1 text-white': lang.code === currentLocale }"
        >
          {{ lang.name }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LanguageSwitcher',
    data() {
      return {
        showDropdown: false,
        availableLanguages: [
          { code: 'en', name: 'English' },
          { code: 'fr', name: 'Français' },
          { code: 'ar', name: 'العربية' }
        ]
      }
    },
    computed: {
      currentLocale() {
        return this.$i18n.locale
      },
      currentLanguageName() {
        const lang = this.availableLanguages.find(l => l.code === this.currentLocale)
        return lang ? lang.name : 'English'
      }
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown
      },
      changeLanguage(locale) {
        this.$i18n.locale = locale
        this.showDropdown = false
        
        // Save to localStorage for persistence
        localStorage.setItem('locale', locale)
        
        // Handle RTL languages
        if (locale === 'ar') {
          document.documentElement.dir = 'rtl'
          document.documentElement.lang = 'ar'
        } else {
          document.documentElement.dir = 'ltr'
          document.documentElement.lang = locale
        }
      }
    },
    mounted() {
      // Load saved locale from localStorage
      const savedLocale = localStorage.getItem('locale')
      if (savedLocale && this.availableLanguages.some(l => l.code === savedLocale)) {
        this.changeLanguage(savedLocale)
      }
      
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.showDropdown = false
        }
      })
    }
  }
  </script>