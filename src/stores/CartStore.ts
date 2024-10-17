import { defineStore } from 'pinia'
import type { Book } from '@/models/BookModel'
import type { CartState } from '@/models/CartState'

export const useCartStore = defineStore('cart-store',{
    state: () : CartState => ({
        loading: false,
        data: [],
    }),
    actions: {
        addItem(book: Book){
            this.data.push(book)
        },
        removeItem(){
        },
        getAllItems(): Book[] {
            return this.data
        },

    }
})
