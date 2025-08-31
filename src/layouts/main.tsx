import { component$ } from "@builder.io/qwik";
import { RouterOutlet } from "@builder.io/qwik-city";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export const MainLayout = component$(() => {
  return (
    <div class="bg-white text-black min-h-screen">
      <Header />
      <main class="max-w-7xl mx-auto px-4 py-6">
        <RouterOutlet />
      </main>
      <Footer />
    </div>
  );
});