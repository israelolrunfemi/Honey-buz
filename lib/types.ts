export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  inStock: boolean
  rating: number
  reviewCount: number
  features?: string[]
  weight?: string
  origin?: string
  isOrganic?: boolean
  isBestSeller?: boolean
  isNew?: boolean
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

export interface Review {
  id: string
  productId: string
  customerName: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}
