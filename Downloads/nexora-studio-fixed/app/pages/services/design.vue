<template>
  <div>
    <!-- Hero Section -->
    <section class="section bg-white mt-16 pt-20">
      <div class="container">
        <h1 class="text-5xl md:text-6xl font-bold text-center mb-6">Design Services</h1>
        <p class="text-lg text-text-light text-center max-w-3xl mx-auto">
          Create stunning visual designs that capture your brand's essence and engage your audience with beautiful, user-centric interfaces.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <Icon name="mdi:palette" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">UI/UX Design</h3>
            <p class="text-text-light mb-4">User-centered design that's beautiful and intuitive, optimized for all devices and user behaviors.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:hexagon-multiple" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Brand Identity</h3>
            <p class="text-text-light mb-4">Comprehensive visual identity systems including logos, color palettes, typography, and brand guidelines.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:file-document" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Marketing Materials</h3>
            <p class="text-text-light mb-4">Eye-catching collateral including brochures, flyers, social media graphics, and promotional materials.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:responsive" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Responsive Design</h3>
            <p class="text-text-light mb-4">Designs that adapt beautifully to every screen size, ensuring excellent user experience on mobile, tablet, and desktop.</p>
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
        <h3 class="text-2xl font-bold mb-4">Ready to elevate your brand?</h3>
        <p class="text-text-light mb-6">Let's create stunning designs that resonate with your audience.</p>
        <NuxtLink to="/contact" class="btn btn-primary">Get Started Today</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Design Services - Nexora',
  description: 'Professional UI/UX design, brand identity, and marketing materials tailored to your business.',
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
