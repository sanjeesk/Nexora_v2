<template>
  <div>
    <!-- Hero Section -->
    <section class="section bg-white mt-16 pt-20">
      <div class="container">
        <h1 class="text-5xl md:text-6xl font-bold text-center mb-6">Digital Marketing Services</h1>
        <p class="text-lg text-text-light text-center max-w-3xl mx-auto">
          Grow your online presence and reach your target audience with data-driven digital marketing strategies.
        </p>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 class="text-4xl font-bold mb-6">What We Offer</h2>
            <div class="space-y-4">
              <div class="flex gap-4">
                <Icon name="mdi:check-circle" size="28" class="text-primary flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-dark mb-1">Search Engine Optimization (SEO)</h3>
                  <p class="text-text-light">Improve your visibility in search results and drive organic traffic</p>
                </div>
              </div>
              <div class="flex gap-4">
                <Icon name="mdi:check-circle" size="28" class="text-primary flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-dark mb-1">Social Media Marketing</h3>
                  <p class="text-text-light">Engage your audience and build brand loyalty on social platforms</p>
                </div>
              </div>
              <div class="flex gap-4">
                <Icon name="mdi:check-circle" size="28" class="text-primary flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-dark mb-1">Paid Advertising</h3>
                  <p class="text-text-light">Google Ads, Facebook Ads, and Instagram campaigns with ROI focus</p>
                </div>
              </div>
              <div class="flex gap-4">
                <Icon name="mdi:check-circle" size="28" class="text-primary flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-dark mb-1">Content Marketing</h3>
                  <p class="text-text-light">Create compelling content that attracts and converts customers</p>
                </div>
              </div>
              <div class="flex gap-4">
                <Icon name="mdi:check-circle" size="28" class="text-primary flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-dark mb-1">Email Marketing</h3>
                  <p class="text-text-light">Build and nurture your email list with targeted campaigns</p>
                </div>
              </div>
              <div class="flex gap-4">
                <Icon name="mdi:check-circle" size="28" class="text-primary flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-dark mb-1">Analytics & Reporting</h3>
                  <p class="text-text-light">Track performance and optimize campaigns with data insights</p>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-lg overflow-hidden h-96 bg-white">
            <img src="/images/startup-website.jpg" alt="Digital Marketing Services" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="section bg-white">
      <div class="container">
        <div class="section-title">
          <h2>Our Marketing Approach</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div class="card text-center">
            <div class="text-4xl font-bold text-primary mb-4">1</div>
            <h3 class="text-xl font-bold mb-3">Research & Analysis</h3>
            <p class="text-text-light">Understand your market, competitors, and target audience</p>
          </div>
          <div class="card text-center">
            <div class="text-4xl font-bold text-primary mb-4">2</div>
            <h3 class="text-xl font-bold mb-3">Strategy Development</h3>
            <p class="text-text-light">Create a customized marketing plan aligned with your goals</p>
          </div>
          <div class="card text-center">
            <div class="text-4xl font-bold text-primary mb-4">3</div>
            <h3 class="text-xl font-bold mb-3">Implementation</h3>
            <p class="text-text-light">Execute campaigns across multiple channels simultaneously</p>
          </div>
          <div class="card text-center">
            <div class="text-4xl font-bold text-primary mb-4">4</div>
            <h3 class="text-xl font-bold mb-3">Optimization</h3>
            <p class="text-text-light">Continuously monitor and refine for maximum results</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Showcase -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="section-title">
          <h2>Our Marketing Services</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <Icon name="mdi:search-web" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">SEO Services</h3>
            <p class="text-text-light mb-4">Keyword research, on-page optimization, link building, and technical SEO to rank higher in search results</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:social-media" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Social Media Marketing</h3>
            <p class="text-text-light mb-4">Content creation, community management, and influencer partnerships to grow your social presence</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:google-ads" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Paid Advertising</h3>
            <p class="text-text-light mb-4">Google Ads, Facebook Ads, and LinkedIn campaigns with expert bidding and audience targeting</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:pencil-multiple" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Content Marketing</h3>
            <p class="text-text-light mb-4">Blog posts, whitepapers, case studies, and video content that drives engagement and conversions</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:email-multiple" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Email Marketing</h3>
            <p class="text-text-light mb-4">Newsletter campaigns, automation, and segmentation for higher engagement and customer retention</p>
            <NuxtLink to="/contact" class="text-primary hover:text-primary-dark font-semibold flex items-center gap-2">
              Learn More
              <Icon name="mdi:arrow-right" size="18" />
            </NuxtLink>
          </div>

          <div class="card">
            <Icon name="mdi:chart-line" size="40" class="text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">Analytics & Reporting</h3>
            <p class="text-text-light mb-4">Detailed performance reports, dashboards, and insights to track ROI and optimize campaigns</p>
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
        <h3 class="text-2xl font-bold mb-4">Ready to grow your business?</h3>
        <p class="text-text-light mb-6">Let's create a marketing strategy that drives results.</p>
        <NuxtLink to="/contact" class="btn btn-primary">Get Started Today</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Digital Marketing Services - Nexora',
  description: 'Professional digital marketing services including SEO, social media, paid ads, and content marketing for Malaysian businesses.',
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
