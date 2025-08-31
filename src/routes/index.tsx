import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Hero } from "~/components/Hero";
import { ProductList } from "~/components/ProductList";

export const useProducts = routeLoader$(async () => {
  const res = await fetch('https://dummyjson.com/products?limit=6');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data.products;
});

export default component$(() => {
  const productsSignal = useProducts();
  return (
    <>
      <Hero />
      <section id="products" class="py-12 px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Featured Products</h2>
        {productsSignal.value && productsSignal.value.length > 0 ? (
          <ProductList products={productsSignal.value} />
        ) : (
          <p class="text-center">Loading products...</p>
        )}
      </section>
    </>
  );
});