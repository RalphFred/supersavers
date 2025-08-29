import { products } from '@/constants'
export async function fetchPreviewProducts() {
  return products.map(p => ({ ...p, primaryImage: p.image[0] }))
}

export async function fetchProductById(id) {
  return products.find(p => p.id === Number(id))
}

export async function fetchProductsByCategory(category) {
    return products.filter(p => p.category === category)
}

export async function fetchProductsByTag(tag) {
    return products.filter(p => p.tags.includes(tag))
}