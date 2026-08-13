<template>
  <div>
    <!-- Hero Section -->
    <Hero />

    <!-- Services Preview Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive creative solutions tailored to your needs</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Design Services"
            description="Stunning visual designs that capture your brand's essence and engage your audience."
            icon="mdi:palette"
            :features="['UI/UX Design', 'Branding', 'Marketing Materials']"
            link="/services/design"
          />
          <ServiceCard
            title="Web Development"
            description="Fast, responsive, and user-friendly websites built with modern technologies."
            icon="mdi:code-braces"
            :features="['Custom Development', 'E-commerce', 'Web Apps']"
            link="/services/build"
          />
          <ServiceCard
            title="Digital Marketing"
            description="Data-driven marketing strategies to grow your online presence and drive conversions."
            icon="mdi:trending-up"
            :features="['SEO Optimization', 'Social Media', 'Paid Campaigns']"
            link="/services/marketing"
          />
        </div>
      </div>
    </section>

    <!-- Featured Portfolio Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="section-title">
          <h2>Featured Work</h2>
          <p>Showcasing our latest and greatest projects</p>
        </div>

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
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/portfolio" class="btn btn-primary">View All Projects</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-12 md:p-16 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p class="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Get in touch with us today.
          </p>
          <NuxtLink to="/contact" class="btn btn-primary">Contact Us Now</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Nexora - Digital Services Agency in Malaysia',
  description: 'Web Development, Branding, and Digital Marketing Services',
})
</script>

<style scoped>
</style>
