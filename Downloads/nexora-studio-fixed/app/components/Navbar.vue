<template>
  <nav class="fixed top-0 w-full z-50 bg-primary border-b border-accent/20 backdrop-blur">
    <div class="container flex items-center justify-between py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition">
        <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary font-bold">
          N
        </div>
        <span class="text-xl font-bold text-white hidden sm:inline">Nexora</span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink to="/" class="text-text-light hover:text-accent transition">Home</NuxtLink>
        <NuxtLink to="/services" class="text-text-light hover:text-accent transition">Services</NuxtLink>
        <NuxtLink to="/portfolio" class="text-text-light hover:text-accent transition">Portfolio</NuxtLink>
        <NuxtLink to="/pricing" class="text-text-light hover:text-accent transition">Pricing</NuxtLink>
        <NuxtLink to="/about" class="text-text-light hover:text-accent transition">About</NuxtLink>
      </div>

      <!-- CTA Button -->
      <NuxtLink to="/contact" class="btn btn-primary hidden md:inline-block">
        Contact Us
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-accent" @click="isOpen = !isOpen">
        <Icon :name="isOpen ? 'mdi:close' : 'mdi:menu'" size="28" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-primary/95 border-t border-accent/20 p-4 space-y-3">
      <NuxtLink to="/" class="block text-text-light hover:text-accent py-2" @click="isOpen = false">Home</NuxtLink>
      <NuxtLink to="/services" class="block text-text-light hover:text-accent py-2" @click="isOpen = false">Services</NuxtLink>
      <NuxtLink to="/portfolio" class="block text-text-light hover:text-accent py-2" @click="isOpen = false">Portfolio</NuxtLink>
      <NuxtLink to="/pricing" class="block text-text-light hover:text-accent py-2" @click="isOpen = false">Pricing</NuxtLink>
      <NuxtLink to="/contact" class="btn btn-primary w-full text-center" @click="isOpen = false">Contact</NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>

<style scoped>
nav {
  background: linear-gradient(180deg, rgba(10, 30, 77, 0.98) 0%, rgba(5, 20, 40, 0.95) 100%);
}
</style>
