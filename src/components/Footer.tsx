import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-gray-800 p-4 text-center mt-12">
      <p>&copy; 2025 VapeStore. All rights reserved.</p>
      <div class="mt-2 space-x-4">
        <a href="#" class="hover:text-green-400">Privacy Policy</a>
        <a href="#" class="hover:text-green-400">Terms of Service</a>
      </div>
    </footer>
  );
});