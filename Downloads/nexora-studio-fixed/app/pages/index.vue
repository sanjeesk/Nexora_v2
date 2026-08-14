<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary via-primary-dark to-primary relative overflow-hidden">
      <!-- Gradient overlay -->
      <div class="absolute inset-0 opacity-50" style="background: radial-gradient(circle at 20% 50%, rgba(0, 188, 212, 0.1) 0%, transparent 50%)"></div>
      
      <div class="container relative z-10 text-center">
        <div class="animate-in">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
            Digital Services <span class="text-accent">Built for Growth</span>
          </h1>
          <p class="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-8">
            Professional web design, development, and digital marketing solutions that drive results for your business.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn btn-primary">Get Started</NuxtLink>
            <NuxtLink to="/services" class="btn btn-secondary">Explore Services</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section bg-primary">
      <div class="container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card">
            <Icon name="mdi:palette" size="48" class="text-accent mb-4" />
            <h3 class="text-2xl font-bold mb-4 text-white">Web Design</h3>
            <p class="text-text-light mb-6">Beautiful, modern designs that capture your brand and engage your audience.</p>
            <NuxtLink to="/services" class="text-accent hover:text-accent-light font-semibold">Learn More →</NuxtLink>
          </div>
          <div class="card">
            <Icon name="mdi:code-braces" size="48" class="text-accent mb-4" />
            <h3 class="text-2xl font-bold mb-4 text-white">Development</h3>
            <p class="text-text-light mb-6">Fast, responsive websites and applications built with latest technologies.</p>
            <NuxtLink to="/services" class="text-accent hover:text-accent-light font-semibold">Learn More →</NuxtLink>
          </div>
          <div class="card">
            <Icon name="mdi:trending-up" size="48" class="text-accent mb-4" />
            <h3 class="text-2xl font-bold mb-4 text-white">Digital Marketing</h3>
            <p class="text-text-light mb-6">Data-driven strategies to grow your online presence and drive sales.</p>
            <NuxtLink to="/services" class="text-accent hover:text-accent-light font-semibold">Learn More →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-to-r from-primary via-primary-dark to-primary">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Digital Presence?</h2>
        <p class="text-lg text-text-light mb-8 max-w-2xl mx-auto">Let's work together to build something amazing for your business.</p>
        <NuxtLink to="/contact" class="btn btn-primary btn-lg text-lg px-8 py-4">Start Your Project Today</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Nexora - Digital Services for Business Growth',
  description: 'Professional web design, development, and digital marketing solutions for Malaysia',
})
</script>

<style scoped>
</style>
