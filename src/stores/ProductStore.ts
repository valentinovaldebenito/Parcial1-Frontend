import { defineStore } from 'pinia'
import type { Producto } from '@/models/Producto.model.ts'

export const useProductStore = defineStore('product-store', {
  state: (): { product: Producto } => ({
    product: {
      id: '',
      nombre: '',
      precio: 0,
      enStock: false,
    },
  }),
  actions: {
    addProducto() {},

    eliminarProducto() {},

    obtenerLibros() {},
  },
})
