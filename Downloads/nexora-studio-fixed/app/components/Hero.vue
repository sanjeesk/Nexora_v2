<template>
  <section class="hero">
    <div class="container relative z-10">
      <div class="hero-content">
        <div class="text-center">
          <span class="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-6">
            ✨ Welcome to Nexora Studio
          </span>
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          We Build <span class="text-gradient">Digital Experiences</span>
        </h1>

        <p class="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-8">
          From stunning web design and cutting-edge development to powerful branding and data-driven marketing solutions, we're your complete digital partner in Kuala Lumpur.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn btn-primary text-center">
            Start Your Project
          </NuxtLink>
          <NuxtLink to="/portfolio" class="btn btn-secondary text-center">
            View Our Work
          </NuxtLink>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="mdi:chevron-down" size="32" class="text-primary/50" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  @apply min-h-screen flex items-center justify-center relative overflow-hidden;
  background: linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(26, 31, 58, 0.95) 100%);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(0, 82, 204, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(90, 58, 122, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  @apply relative z-10 text-center animation-fadeInUp;
}

h1 {
  @apply text-white;
}

.text-gradient {
  @apply bg-clip-text text-transparent;
  background-image: linear-gradient(135deg, #0052CC 0%, #00ff88 100%);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>
