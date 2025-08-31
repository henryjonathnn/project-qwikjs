import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
    return (
        <header class="bg-gray-50 text-black p-4 flex justify-between items-center">
            <div class="text-2xl font-bold">Hyura Store</div>
            <nav>
                <a href="#" class="mx-4 hover:text-gray-700">Home</a>
                <a href="#" class="mx-4 hover:text-gray-400">Products</a>
                <a href="#" class="mx-4 hover:text-gray-400">About</a>
                <a href="#" class="mx-4 hover:text-gray-400">Contact</a>
            </nav>
        </header>
    )
})