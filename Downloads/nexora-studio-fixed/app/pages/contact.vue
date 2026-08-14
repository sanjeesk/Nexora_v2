<template>
  <div>
    <!-- Hero Section -->
    <section class="section bg-white mt-16 pt-20">
      <div class="container">
        <h1 class="text-5xl md:text-6xl font-bold text-center mb-6">Get In Touch</h1>
        <p class="text-lg text-text-light text-center max-w-3xl mx-auto">
          Have a project in mind? We'd love to hear about it. Get in touch with us today!
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="card text-center">
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:email" size="32" class="text-primary" />
            </div>
            <h3 class="text-lg font-bold mb-2">Email</h3>
            <a href="mailto:hello@nexora.my" class="text-primary hover:text-primary-dark">hello@nexora.my</a>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:phone" size="32" class="text-primary" />
            </div>
            <h3 class="text-lg font-bold mb-2">Phone</h3>
            <a href="tel:+60123456789" class="text-primary hover:text-primary-dark">+60 12 345 6789</a>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:map-marker" size="32" class="text-primary" />
            </div>
            <h3 class="text-lg font-bold mb-2">Location</h3>
            <p class="text-text-light">Kuala Lumpur, Malaysia</p>
          </div>
        </div>

        <div class="max-w-2xl mx-auto">
          <form class="card space-y-6">
            <div>
              <label class="block text-sm font-semibold text-dark mb-2">Name</label>
              <input type="text" placeholder="Your name" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none transition-colors" />
            </div>

            <div>
              <label class="block text-sm font-semibold text-dark mb-2">Email</label>
              <input type="email" placeholder="your@email.com" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none transition-colors" />
            </div>

            <div>
              <label class="block text-sm font-semibold text-dark mb-2">Project Type</label>
              <select class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none transition-colors">
                <option>Select a service</option>
                <option>Design Services</option>
                <option>Web Development</option>
                <option>Branding</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-dark mb-2">Message</label>
              <textarea placeholder="Tell us about your project" rows="6" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <button type="submit" class="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact Nexora - Let\'s Talk',
  description: 'Get in touch with Nexora for your next digital project. We\'re here to help bring your vision to life.',
})
</script>

<style scoped>
.card {
  @apply bg-white rounded-lg p-6 md:p-8 border border-gray-200;
}
</style>
