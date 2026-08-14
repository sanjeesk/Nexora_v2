<template>
  <footer class="bg-primary-dark border-t border-accent/20 py-16">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="text-accent font-bold mb-4">Nexora</h3>
          <p class="text-text-light text-sm">Professional digital services for businesses ready to grow.</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/services" class="text-text-light hover:text-accent">Web Design</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-text-light hover:text-accent">Development</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-text-light hover:text-accent">Digital Marketing</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="text-text-light hover:text-accent">About</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="text-text-light hover:text-accent">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="text-text-light hover:text-accent">Pricing</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Contact</h4>
          <p class="text-text-light text-sm mb-2">hello@nexora.my</p>
          <p class="text-text-light text-sm">Kuala Lumpur, Malaysia</p>
        </div>
      </div>
      <div class="border-t border-accent/20 pt-8 text-center text-text-light text-sm">
        <p>&copy; 2024 Nexora. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
