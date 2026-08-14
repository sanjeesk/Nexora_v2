<template>
  <div>
    <!-- Hero Section -->
    <section class="section bg-white mt-16 pt-20">
      <div class="container">
        <h1 class="text-5xl md:text-6xl font-bold text-center mb-6">Branding Services</h1>
        <p class="text-lg text-text-light text-center max-w-3xl mx-auto">
          Build a powerful brand identity that resonates with your audience and sets you apart from competitors.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <Icon name="mdi:palette-advanced" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Brand Strategy</h3>
            <p class="text-text-light mb-4">Comprehensive brand strategy that defines your unique value proposition, target audience, and market positioning.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:logo-wordpress" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Logo Design</h3>
            <p class="text-text-light mb-4">Memorable logo design that captures your brand essence and stands out in your industry.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:palette" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Color & Typography</h3>
            <p class="text-text-light mb-4">Carefully selected color palettes and typography systems that define your brand's visual language.</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:file-document-multiple" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Brand Guidelines</h3>
            <p class="text-text-light mb-4">Comprehensive brand guidelines ensuring consistency across all touchpoints and communications.</p>
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
        <h3 class="text-2xl font-bold mb-4">Ready to build your brand?</h3>
        <p class="text-text-light mb-6">Let's create a distinctive brand that captures hearts and drives loyalty.</p>
        <NuxtLink to="/contact" class="btn btn-primary">Begin Branding Journey</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Branding Services - Nexora',
  description: 'Brand strategy, logo design, color systems, and comprehensive brand guidelines.',
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
