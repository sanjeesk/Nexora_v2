<template>
  <div class="service-card group">
    <div class="icon-wrapper">
      <Icon :name="icon" size="40" class="text-primary" />
    </div>
    
    <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
    <p class="text-text-light mb-6">{{ description }}</p>
    
    <ul class="space-y-2 mb-6">
      <li v-for="feature in features" :key="feature" class="flex gap-2 text-sm">
        <Icon name="mdi:check" class="text-primary flex-shrink-0 mt-0.5" />
        <span class="text-text-light">{{ feature }}</span>
      </li>
    </ul>
    
    <NuxtLink :to="link" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
      Learn More
      <Icon name="mdi:arrow-right" size="18" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  features: string[]
  link: string
}>()
</script>

<style scoped>
.service-card {
  @apply bg-white rounded-lg p-6 md:p-8 border border-gray-200 transition-all duration-300 hover:border-primary hover:shadow-lg;
  box-shadow: 0 0 0 rgba(0, 82, 204, 0);
}

.service-card:hover {
  box-shadow: 0 20px 40px rgba(0, 82, 204, 0.15);
}

.icon-wrapper {
  @apply mb-4 p-3 rounded-lg bg-primary/10 w-fit transition-all duration-300;
}

.service-card:hover .icon-wrapper {
  @apply bg-primary/20;
  transform: scale(1.1);
}
</style>
