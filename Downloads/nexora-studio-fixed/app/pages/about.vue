<template>
  <div>
    <!-- Hero Section -->
    <section class="section bg-white mt-16 pt-20">
      <div class="container">
        <h1 class="text-5xl md:text-6xl font-bold text-center mb-6">About Nexora</h1>
        <p class="text-lg text-text-light text-center max-w-3xl mx-auto">
          We're a team of passionate digital experts dedicated to transforming businesses through innovative web design, powerful development, strategic branding, and data-driven marketing.
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-6">Our Story</h2>
            <p class="text-text-light mb-4">
              Founded in 2020, Nexora started with a simple vision: to help Malaysian businesses compete on the global digital stage. What began as a small team of designers and developers has grown into a full-service digital agency.
            </p>
            <p class="text-text-light mb-4">
              We've worked with startups, SMEs, and established brands across various industries—from e-commerce to fintech, healthcare to hospitality. Every project teaches us something new, and every client partnership shapes our approach.
            </p>
            <p class="text-text-light">
              Today, we're committed to delivering premium digital solutions that don't just look great—they drive real business results.
            </p>
          </div>
          <div class="rounded-lg overflow-hidden h-96 bg-gradient-to-br from-primary/20 to-accent/20"></div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="section-title">
          <h2>Our Values</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="text-xl font-bold mb-3">Excellence</h3>
            <p class="text-text-light">We obsess over every detail, from code quality to pixel-perfect design. Excellence isn't optional—it's our standard.</p>
          </div>
          <div class="card text-center">
            <div class="text-5xl mb-4">🤝</div>
            <h3 class="text-xl font-bold mb-3">Partnership</h3>
            <p class="text-text-light">Your success is our success. We work as an extension of your team, deeply invested in achieving your goals.</p>
          </div>
          <div class="card text-center">
            <div class="text-5xl mb-4">💡</div>
            <h3 class="text-xl font-bold mb-3">Innovation</h3>
            <p class="text-text-light">We stay ahead of digital trends and leverage cutting-edge technologies to give you competitive advantage.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="section-title">
          <h2>Our Team</h2>
          <p>Talented individuals united by passion for digital excellence</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4"></div>
            <h3 class="text-lg font-bold">Sanjee K</h3>
            <p class="text-text-light text-sm mb-2">Founder & Creative Director</p>
            <p class="text-text-light text-sm">Design visionary with 8+ years of experience crafting digital experiences.</p>
          </div>
          <div class="card text-center">
            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4"></div>
            <h3 class="text-lg font-bold">Developer Lead</h3>
            <p class="text-text-light text-sm mb-2">CTO & Lead Developer</p>
            <p class="text-text-light text-sm">Full-stack expert passionate about building scalable, performant web solutions.</p>
          </div>
          <div class="card text-center">
            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4"></div>
            <h3 class="text-lg font-bold">Marketing Pro</h3>
            <p class="text-text-light text-sm mb-2">Head of Marketing</p>
            <p class="text-text-light text-sm">Data-driven strategist who turns digital presence into business growth.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
      <div class="container text-center">
        <h3 class="text-2xl font-bold mb-4">Ready to work with us?</h3>
        <p class="text-text-light mb-6 max-w-2xl mx-auto">Let's discuss your project and how we can help bring your digital vision to life.</p>
        <NuxtLink to="/contact" class="btn btn-primary">Get in Touch</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Nexora - Digital Services Agency',
  description: 'Learn about Nexora, a digital agency specializing in web design, development, branding, and marketing for Malaysian businesses.',
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
