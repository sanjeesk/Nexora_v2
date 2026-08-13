<template>
  <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all">
    <div class="container flex items-center justify-between py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition">
        <div class="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-dark font-bold">
          N
        </div>
        <span class="text-xl font-bold text-dark hidden sm:inline">Nexora</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        
        <!-- Services Mega Menu -->
        <div class="relative group">
          <button class="nav-link flex items-center gap-1">
            Services
            <Icon name="mdi:chevron-down" size="20" />
          </button>
          <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-[680px] max-w-[95vw] bg-white rounded-xl shadow-2xl shadow-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200 overflow-hidden">
            <div class="grid grid-cols-[1fr_1fr_1.1fr] gap-8 p-8">
              <div>
                <p class="text-xs uppercase tracking-wider text-text-light font-semibold mb-4">Our Services</p>
                <NuxtLink to="/services/design" class="mega-link mega-link-active">Design Services</NuxtLink>
                <NuxtLink to="/services/build" class="mega-link">Web Development</NuxtLink>
                <NuxtLink to="/services/brand" class="mega-link">Branding</NuxtLink>
                <NuxtLink to="/services/marketing" class="mega-link">Digital Marketing</NuxtLink>
              </div>

              <div>
                <p class="text-xs uppercase tracking-wider text-text-light font-semibold mb-4">Popular Offerings</p>
                <NuxtLink to="/services/design" class="mega-link">UI/UX Design</NuxtLink>
                <NuxtLink to="/services/brand" class="mega-link">Logo Design</NuxtLink>
                <NuxtLink to="/services/build" class="mega-link">E-Commerce Solutions</NuxtLink>
                <NuxtLink to="/services/brand" class="mega-link">Brand Guidelines</NuxtLink>
                <NuxtLink to="/services/build" class="mega-link">Progressive Web Apps</NuxtLink>
              </div>

              <NuxtLink to="/portfolio/sk-recycle" class="relative rounded-lg overflow-hidden block h-full min-h-[220px] group/card bg-gradient-to-br from-primary/20 via-dark to-dark-lighter">
                <Icon name="mdi:shopping-outline" size="80" class="absolute top-6 right-6 text-primary/20 transition-transform duration-300 group-hover/card:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <span class="text-xs text-primary font-semibold">Featured Project</span>
                  <h4 class="text-white font-bold leading-snug mt-1">SK Recycle - E-Commerce Platform</h4>
                  <span class="text-xs text-primary inline-flex items-center gap-1 mt-2">
                    View Case Study
                    <Icon name="mdi:arrow-right" size="14" />
                  </span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink to="/portfolio" class="nav-link">Portfolio</NuxtLink>
        <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
        <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
        <NuxtLink to="/contact" class="btn btn-primary text-sm">Get in Touch</NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="isOpen = !isOpen">
        <Icon :name="isOpen ? 'mdi:close' : 'mdi:menu'" size="28" class="text-primary" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
      <NuxtLink to="/" class="mobile-nav-link" @click="isOpen = false">Home</NuxtLink>
      <NuxtLink to="/about" class="mobile-nav-link" @click="isOpen = false">About</NuxtLink>
      <details class="cursor-pointer">
        <summary class="mobile-nav-link">Services</summary>
        <div class="pl-4 mt-2 space-y-2 border-l border-primary/30">
          <NuxtLink to="/services/design" class="mobile-nav-link" @click="isOpen = false">Design</NuxtLink>
          <NuxtLink to="/services/build" class="mobile-nav-link" @click="isOpen = false">Web Dev</NuxtLink>
          <NuxtLink to="/services/brand" class="mobile-nav-link" @click="isOpen = false">Branding</NuxtLink>
          <NuxtLink to="/services/marketing" class="mobile-nav-link" @click="isOpen = false">Digital Marketing</NuxtLink>
        </div>
      </details>
      <NuxtLink to="/portfolio" class="mobile-nav-link" @click="isOpen = false">Portfolio</NuxtLink>
      <NuxtLink to="/blog" class="mobile-nav-link" @click="isOpen = false">Blog</NuxtLink>
      <NuxtLink to="/contact" class="btn btn-primary w-full text-center" @click="isOpen = false">Get in Touch</NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false)

// Close mobile menu on route change
const router = useRouter()
router.afterEach(() => {
  isOpen.value = false
})
</script>

<style scoped>
.nav-link {
  @apply text-text hover:text-primary transition-colors duration-300 font-medium;
}

.mobile-nav-link {
  @apply block text-text hover:text-primary transition-colors duration-300 font-medium py-2;
}

.dropdown-link {
  @apply block px-3 py-2 rounded text-text hover:text-primary hover:bg-dark/50 transition-colors duration-300 font-medium w-full text-left;
}

.mega-link {
  @apply block py-2 text-text hover:text-primary transition-colors duration-300 font-medium;
}

.mega-link-active {
  @apply text-primary;
}

/* Add padding to body when navbar is fixed */
:global(body) {
  padding-top: 0;
}

nav {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
}
</style>
