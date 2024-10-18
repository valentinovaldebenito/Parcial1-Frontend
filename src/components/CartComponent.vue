<script setup lang="ts">
import type { Book } from '@/models/BookModel';
import { useCartStore } from '@/stores/CartStore';
const cartStore = useCartStore();

const books: Book[] = cartStore.getAllItems()

function eliminarItem(book: Book){
    cartStore.removeItem(book)
}

console.log(books)
</script>

<template>
    <div class="flex flex-col p-4 gap-3 w-full h-full">
        <div class="flex flex-col w-full h-[60px] bg-blue-200 gap-2 rounded-md" v-for="book in books" :key="book.id">
            <div class="w-10/12 p-2">
                <span class="text-sm">{{ book.title }}</span>
                <span class="text-sm">{{ book.author }}</span>
                <span class="text-sm">{{ book.title }}</span>
            </div>
            <div class="w-2/12">
                <button v-on:click="eliminarItem(book)">Eliminar</button>
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<style scoped>
</style>