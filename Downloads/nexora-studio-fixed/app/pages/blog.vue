<template>
  <div>
    <!-- Hero Section -->
    <section class="section bg-white mt-16 pt-20">
      <div class="container">
        <h1 class="text-5xl md:text-6xl font-bold text-center mb-6">Our Blog</h1>
        <p class="text-lg text-text-light text-center max-w-3xl mx-auto">
          Insights, tips, and industry trends from the Nexora team. Stay updated with the latest in digital marketing and web design.
        </p>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <article class="card">
            <div class="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4"></div>
            <span class="text-xs text-primary font-semibold">Web Design</span>
            <h3 class="text-2xl font-bold mt-2 mb-3 text-dark">The Ultimate Guide to UX Design in 2024</h3>
            <p class="text-text-light mb-4">Explore the latest UX design trends, principles, and best practices to create exceptional digital experiences.</p>
            <div class="flex items-center justify-between text-sm text-text-light">
              <span>June 15, 2024</span>
              <NuxtLink to="#" class="text-primary hover:text-primary-dark font-semibold">Read More →</NuxtLink>
            </div>
          </article>

          <article class="card">
            <div class="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4"></div>
            <span class="text-xs text-primary font-semibold">Digital Marketing</span>
            <h3 class="text-2xl font-bold mt-2 mb-3 text-dark">SEO Strategies That Actually Drive Results</h3>
            <p class="text-text-light mb-4">Learn proven SEO tactics and strategies that can help your business rank higher and attract more organic traffic.</p>
            <div class="flex items-center justify-between text-sm text-text-light">
              <span>June 10, 2024</span>
              <NuxtLink to="#" class="text-primary hover:text-primary-dark font-semibold">Read More →</NuxtLink>
            </div>
          </article>

          <article class="card">
            <div class="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4"></div>
            <span class="text-xs text-primary font-semibold">Web Development</span>
            <h3 class="text-2xl font-bold mt-2 mb-3 text-dark">Building Fast, Modern Websites with Nuxt</h3>
            <p class="text-text-light mb-4">A comprehensive guide to building performant, scalable web applications using Nuxt and modern JavaScript frameworks.</p>
            <div class="flex items-center justify-between text-sm text-text-light">
              <span>June 5, 2024</span>
              <NuxtLink to="#" class="text-primary hover:text-primary-dark font-semibold">Read More →</NuxtLink>
            </div>
          </article>

          <article class="card">
            <div class="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4"></div>
            <span class="text-xs text-primary font-semibold">Branding</span>
            <h3 class="text-2xl font-bold mt-2 mb-3 text-dark">Creating a Strong Brand Identity</h3>
            <p class="text-text-light mb-4">Discover the essential elements of brand identity and how to create a cohesive, memorable brand for your business.</p>
            <div class="flex items-center justify-between text-sm text-text-light">
              <span>May 28, 2024</span>
              <NuxtLink to="#" class="text-primary hover:text-primary-dark font-semibold">Read More →</NuxtLink>
            </div>
          </article>
        </div>

        <div class="text-center">
          <button class="btn btn-secondary">Load More Articles</button>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="section bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
      <div class="container text-center">
        <h3 class="text-2xl font-bold mb-4">Stay Updated</h3>
        <p class="text-text-light mb-6 max-w-2xl mx-auto">Subscribe to our newsletter to get the latest insights, tips, and industry trends delivered to your inbox.</p>
        <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg border border-primary/30 focus:border-primary focus:outline-none" />
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog - Nexora Digital Services',
  description: 'Read articles on web design, web development, digital marketing, and branding trends from the Nexora team.',
})
</script>

<style scoped>
.card {
  @apply bg-white rounded-lg p-6 md:p-8 border border-gray-200 transition-all duration-300 hover:border-primary hover:shadow-lg;
  box-shadow: 0 0 0 rgba(0, 82, 204, 0);
}

.card:hover {
  box-shadow: 0 20px 40px rgba(0, 82, 204, 0.15);
}
</style>
