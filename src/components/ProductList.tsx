import { component$ } from "@builder.io/qwik";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: { id: number; title: string; price: number; thumbnail: string }[];
}

export const ProductList = component$<ProductListProps>(({ products }) => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
});