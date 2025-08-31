import { component$ } from "@builder.io/qwik";
import { CardProduct } from "./CardProduct";

interface ProductListProps {
    products: Array<{
        id: number;
        title: string;
        price: number;
        thumbnail: string;
    }>
}

export const ProductList = component$<ProductListProps>(({ products }) => {
    return (
        <div class="product-grid">
            {products.map((product) => (
                <CardProduct key={product.id} {...product} />
            ))}
        </div>
    )
})