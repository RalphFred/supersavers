import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Define your messages for different languages
const messages = {
  en: {
    cart: {
      title: 'Cart',
      empty: 'Your cart is empty',
      continue_shopping: 'Continue Shopping',
      remove: 'Remove',
      total_items: 'Total Items',
      total: 'Total',
      checkout: 'Proceed to Checkout',
      clear_cart: 'Clear Cart',
      quantity: 'Quantity'
    },
    common: {
      back: 'Back',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    },
    product: {
      title: 'Product',
      previous: 'Previous',
      next: 'Next',
      image: 'Image',
      decrease_quantity: 'Decrease Quantity',
      increase_quantity: 'Increase Quantity',
      quantity: 'Quantity',
      add_to_cart: 'Add to Cart',
      added_to_cart: 'Added to cart!'
    }
  },
  fr: {
    cart: {
      title: 'Panier',
      empty: 'Votre panier est vide',
      continue_shopping: 'Continuer les Achats',
      remove: 'Supprimer',
      total_items: 'Articles Totaux',
      total: 'Total',
      checkout: 'Procéder au Paiement',
      clear_cart: 'Vider le Panier',
      quantity: 'Quantité'
    },
    common: {
      back: 'Retour',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès'
    },
    product: {
      title: 'Produit',
      previous: 'Précédent',
      next: 'Suivant',
      image: 'Image',
      decrease_quantity: 'Diminuer la Quantité',
      increase_quantity: 'Augmenter la Quantité',
      quantity: 'Quantité',
      add_to_cart: 'Ajouter au Panier',
      added_to_cart: 'Ajouté au panier !'
    }
  },
  ar: {
    cart: {
      title: 'عربة التسوق',
      empty: 'عربة التسوق فارغة',
      continue_shopping: 'مواصلة التسوق',
      remove: 'إزالة',
      total_items: 'إجمالي العناصر',
      total: 'المجموع',
      checkout: 'المتابعة للدفع',
      clear_cart: 'إفراغ العربة',
      quantity: 'الكمية'
    },
    common: {
      back: 'رجوع',
      loading: 'جاري التحميل...',
      error: 'خطأ',
      success: 'نجح'
    },
    product: {
      title: 'المنتج',
      previous: 'السابق',
      next: 'التالي',
      image: 'صورة',
      decrease_quantity: 'تقليل الكمية',
      increase_quantity: 'زيادة الكمية',
      quantity: 'الكمية',
      add_to_cart: 'أضف إلى العربة',
      added_to_cart: 'تمت الإضافة إلى العربة!'
    }
  }
}

// Create i18n instance
const i18n = new VueI18n({
  locale: 'en', // default language
  fallbackLocale: 'en', // fallback if translation missing
  messages
})

export default i18n