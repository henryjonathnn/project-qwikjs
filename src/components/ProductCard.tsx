import { component$ } from "@builder.io/qwik";

interface ProductProps {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

export const ProductCard = component$<ProductProps>(({ id, title, price, thumbnail }) => {
    return (
        <div class="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={thumbnail} alt={title} class="w-full h-48 object-cover mb-4 rounded" />
            <h2 class="text-lg font-semibold mb-2">{title}</h2>
            <p class="text-green-600 font-bold">${price}</p>
            <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full mt-4">
                Add to Cart
            </button>
        </div>
    );
});