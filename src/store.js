import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: [],
    },
    mutations: {
        addToCart(state, product) {
            // Check if product already exists in cart
            const existingItem = state.cart.find(item => item.id === product.id);
            
            if (existingItem) {
                // If product exists, increase quantity
                existingItem.quantity += product.quantity || 1;
            } else {
                // If new product, add to cart with quantity
                state.cart.push({
                    ...product,
                    quantity: product.quantity || 1
                });
            }
        },
        removeFromCart(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
        },
        updateQuantity(state, { productId, quantity }) {
            const item = state.cart.find(item => item.id === productId);
            if (item) {
                if (quantity <= 0) {
                    // Remove item if quantity is 0 or negative
                    state.cart = state.cart.filter(item => item.id !== productId);
                } else {
                    item.quantity = quantity;
                }
            }
        },
        clearCart(state) {
            state.cart = [];
        },
        removeItem(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
        }
    },
    getters: {
        cartItemCount: state => {
            return state.cart.reduce((total, item) => total + (item.quantity || 1), 0);
        },
        cartTotal: state => {
            return state.cart.reduce((total, item) => {
                return total + (item.price * (item.quantity || 1));
            }, 0);
        },
        cartItems: state => state.cart,
        isCartEmpty: state => state.cart.length === 0,
        getCartItem: (state) => (productId) => {
            return state.cart.find(item => item.id === productId);
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product);
        },
        removeFromCart({ commit }, productId) {
            commit('removeFromCart', productId);
        },
        updateCartItemQuantity({ commit }, payload) {
            commit('updateQuantity', payload);
        },
        clearCart({ commit }) {
            commit('clearCart');
        }
    }
});