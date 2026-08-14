<template>
  <NuxtLink :to="link" class="case-study-card group block">
    <div class="relative h-64 md:h-96 overflow-hidden rounded-lg mb-4">
      <img 
        :src="image" 
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div class="space-y-2">
      <div class="flex flex-wrap gap-2">
        <span v-for="category in categories" :key="category" class="text-xs font-semibold text-primary">
          {{ category }}
        </span>
      </div>
      
      <h3 class="text-xl font-bold text-dark group-hover:text-primary transition-colors">{{ title }}</h3>
      
      <p class="text-text-light line-clamp-2">{{ description }}</p>
      
      <div class="flex items-center justify-between pt-2">
        <span class="text-sm text-text-light">{{ client }} • {{ year }}</span>
        <Icon name="mdi:arrow-right" size="20" class="text-primary transform group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  categories: string[]
  link: string
  year: string
  client: string
}>()
</script>

<style scoped>
.case-study-card {
  @apply transition-all duration-300;
}

.case-study-card:hover {
  transform: translateY(-4px);
}
</style>
