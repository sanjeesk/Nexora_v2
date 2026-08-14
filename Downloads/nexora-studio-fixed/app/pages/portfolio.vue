<template>
  <div>
    <!-- Hero Section -->
    <section class="section bg-white mt-16 pt-20">
      <div class="container">
        <h1 class="text-5xl md:text-6xl font-bold text-center mb-6">Our Portfolio</h1>
        <p class="text-lg text-text-light text-center max-w-3xl mx-auto">
          Showcasing our latest and greatest projects across design, development, branding, and digital marketing.
        </p>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard
            title="E-Commerce Platform Redesign"
            description="Complete redesign and development of a leading e-commerce platform, resulting in 40% increase in conversions."
            image="/images/case-study-1.jpg"
            :categories="['Web Design', 'Development']"
            link="/portfolio/ecommerce-redesign"
            year="2024"
            client="Tech Corp"
          />
          <CaseStudyCard
            title="Brand Identity System"
            description="Comprehensive branding system for a growing fintech startup, including visual identity and guidelines."
            image="/images/case-study-2.jpg"
            :categories="['Branding', 'Design']"
            link="/portfolio/fintech-branding"
            year="2024"
            client="FinFlow"
          />
          <CaseStudyCard
            title="SaaS Dashboard Design"
            description="Modern, intuitive dashboard interface for a project management SaaS platform with real-time analytics."
            image="/images/startup-website.jpg"
            :categories="['UI/UX Design', 'Web App']"
            link="/portfolio/saas-dashboard"
            year="2023"
            client="ProjectHub"
          />
          <CaseStudyCard
            title="Digital Marketing Campaign"
            description="Full-stack digital marketing campaign including strategy, creative, and execution for 300% ROI."
            image="/images/luxury-brand.jpg"
            :categories="['Marketing', 'Strategy']"
            link="/portfolio/marketing-campaign"
            year="2023"
            client="Luxury Retail"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
      <div class="container text-center">
        <h3 class="text-2xl font-bold mb-4">Impressed by our work?</h3>
        <p class="text-text-light mb-6">Let's discuss how we can create something amazing for your business.</p>
        <NuxtLink to="/contact" class="btn btn-primary">Start Your Project</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio - Nexora Digital Services',
  description: 'View our latest projects and case studies showcasing our expertise in design, development, branding, and marketing.',
})
</script>

<style scoped>
</style>
