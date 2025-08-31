import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ProductList } from "~/components/ProductList";
import { RouterHead } from "~/components/router-head/router-head";

export const useProducts = routeLoader$(async () => {
  const res = await fetch('https://dummyjson.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();
  return data.products;
})

export default component$(() => {
  const productsSignal = useProducts();
  if (productsSignal.error) {
    return <p>Error loading products: {productsSignal.error.message}</p>
  }
  return (
    <>
    <RouterHead title="Home" description="Welcome to our store" />
    <h1>Welcome to our store</h1>
    {productsSignal.value && productsSignal.value.length > 0 ? (
      <ProductList products={productsSignal.value} />
    ) : (
      <p>Loading products...</p>
    )}
    </>
  );
});
