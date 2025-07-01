<template>
  <section class="service-section" :id="title.toLowerCase()" data-animate="fade-up">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-md-8 heading-section text-center">
          <h2 class="mb-4">{{ title }}</h2>
          <p class="about-description">{{ description }}</p>
        </div>
      </div>

      <!-- Service Items -->
      <div class="row text-center">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="col-md-4 mb-4"
        >
          <div class="service-box">
            <div v-if="service.icon" class="icon mb-3">
              <span :class="service.icon"></span>
            </div>
            <h4>{{ service.title }}</h4>
            <p>{{ service.text }}</p>
          </div>
        </div>
      </div>

      <!-- Gallery (optional) -->
      <div v-if="gallery && gallery.length" class="row no-gutters pt-5">
        <div
          v-for="(image, i) in gallery"
          :key="i"
          class="col-md-3 mb-4 px-2"
        >
          <div
            class="model img d-flex align-items-end"
            :style="{ backgroundImage: `url(${image.url})` }"
          >
            <div class="desc w-100 px-3 py-2">
              <div class="text">
                <span>{{ image.category || title }}</span>
                <h2>{{ image.title }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  services: Array,
  imageUrl: String,
  gallery: Array
})
</script>

<style scoped>
.service-section {
  padding: 80px 0;
  background: #101010;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.service-box {
  background: rgba(255, 255, 255, 0.03);
  padding: 30px 20px;
  border-radius: 12px;
  transition: 0.3s ease;
}

.service-box:hover {
  background: rgba(255, 255, 255, 0.08);
}

.service-box h4 {
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 1.2rem;
}

.model {
  background-size: cover;
  background-position: center;
  height: 250px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: transform 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
}

.model:hover {
  transform: scale(1.02);
}

.model .desc {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
}

.model .desc .text h2 {
  font-size: 14px;
  margin: 0;
}

.model .desc .text span {
  font-size: 0.85rem;
  opacity: 0.8;
}
</style>