import { component$ } from "@builder.io/qwik";

interface ProductProps {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

export const CardProduct = component$<ProductProps>(({ id, title, price, thumbnail }) => {
    return (
        <div class="card">
            <img src={thumbnail} alt={title} />
            <h2>{title}</h2>
            <p>${price}</p>
            <button onClick$={() => console.log(`Added ${id} to cart`)}>Add to Cart</button>
        </div>
    );
});