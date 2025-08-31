import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
    return (
        <section class="bg-[url('/hero-bg.jpg')] bg-cover bg-center h-96 flex items-center justify-center text-center text-white">
            <div class="text-center">
                <h1 class="text-5xl font-bold mb-4 text-green-400">Welcome to Hyura Store</h1>
                <p class="text-xl mb-6">Discover the best vaping experience with our premium products.</p>
                <button class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
                    Shop Now
                </button>
            </div>
        </section>
    )
})