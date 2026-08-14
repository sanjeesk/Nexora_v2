<template>
  <footer class="bg-dark text-gray-400 border-t border-dark-lighter">
    <div class="container py-16 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold">
              N
            </div>
            <span class="text-xl font-bold text-white">Nexora</span>
          </div>
          <p class="text-sm text-gray-500 mb-6">
            Premium digital services for businesses ready to grow.
          </p>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
              <Icon name="mdi:facebook" size="20" />
            </a>
            <a href="#" class="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
              <Icon name="mdi:twitter" size="20" />
            </a>
            <a href="#" class="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
              <Icon name="mdi:linkedin" size="20" />
            </a>
            <a href="#" class="w-10 h-10 bg-dark-lighter rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all">
              <Icon name="mdi:instagram" size="20" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold mb-4">Services</h4>
          <ul class="space-y-3">
            <li><NuxtLink to="/services/design" class="text-gray-400 hover:text-primary transition-colors">Design Services</NuxtLink></li>
            <li><NuxtLink to="/services/build" class="text-gray-400 hover:text-primary transition-colors">Web Development</NuxtLink></li>
            <li><NuxtLink to="/services/brand" class="text-gray-400 hover:text-primary transition-colors">Branding</NuxtLink></li>
            <li><NuxtLink to="/services/marketing" class="text-gray-400 hover:text-primary transition-colors">Digital Marketing</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="space-y-3">
            <li><NuxtLink to="/" class="text-gray-400 hover:text-primary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-gray-400 hover:text-primary transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="text-gray-400 hover:text-primary transition-colors">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="text-gray-400 hover:text-primary transition-colors">Pricing</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-gray-400 hover:text-primary transition-colors">Blog</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-semibold mb-4">Get In Touch</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-2">
              <Icon name="mdi:email" size="20" class="text-primary mt-1 flex-shrink-0" />
              <a href="mailto:hello@nexora.my" class="text-gray-400 hover:text-primary transition-colors text-sm">hello@nexora.my</a>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="mdi:phone" size="20" class="text-primary mt-1 flex-shrink-0" />
              <a href="tel:+60123456789" class="text-gray-400 hover:text-primary transition-colors text-sm">+60 12 345 6789</a>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="mdi:map-marker" size="20" class="text-primary mt-1 flex-shrink-0" />
              <span class="text-gray-400 text-sm">Kuala Lumpur, Malaysia</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-dark-lighter my-8"></div>

      <!-- Bottom -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-gray-500">
          &copy; 2024 Nexora. All rights reserved.
        </p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <NuxtLink to="#" class="text-sm text-gray-400 hover:text-primary transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="#" class="text-sm text-gray-400 hover:text-primary transition-colors">Terms of Service</NuxtLink>
          <NuxtLink to="#" class="text-sm text-gray-400 hover:text-primary transition-colors">Cookie Policy</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
