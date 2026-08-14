<template>
  <div>
    <!-- Hero Section -->
    <section class="section bg-white mt-16 pt-20">
      <div class="container">
        <h1 class="text-5xl md:text-6xl font-bold text-center mb-6">Web Development</h1>
        <p class="text-lg text-text-light text-center max-w-3xl mx-auto">
          Fast, responsive, and user-friendly websites built with modern technologies, optimized for performance and conversions.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <Icon name="mdi:code-braces" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Custom Web Development</h3>
            <p class="text-text-light mb-4">Bespoke web applications built with latest technologies, tailored specifically to your business needs.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:shopping" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">E-Commerce Solutions</h3>
            <p class="text-text-light mb-4">Complete online store setup with payment gateways, inventory management, and conversion optimization.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:application" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Web Apps & PWAs</h3>
            <p class="text-text-light mb-4">Progressive Web Apps that work offline, load instantly, and feel like native applications.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:speedometer" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Performance Optimization</h3>
            <p class="text-text-light mb-4">Lightning-fast website speed and performance optimization to improve user experience and SEO.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
      <div class="container text-center">
        <h3 class="text-2xl font-bold mb-4">Let's build something amazing</h3>
        <p class="text-text-light mb-6">Transform your ideas into powerful web experiences.</p>
        <NuxtLink to="/contact" class="btn btn-primary">Start Your Project</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Web Development Services - Nexora',
  description: 'Custom web development, e-commerce solutions, and progressive web apps built with modern technologies.',
})
</script>

<style scoped>
.card {
  @apply bg-white rounded-lg p-6 md:p-8 border border-gray-200 hover:border-primary transition-all duration-300;

  &:hover {
    @apply shadow-lg;
    box-shadow: 0 0 30px rgba(0, 82, 204, 0.15);
  }
}
</style>
