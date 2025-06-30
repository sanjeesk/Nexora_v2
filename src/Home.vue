<template>
  <div class="layout">
    <Sidebar />

    <main class="content">
      <!-- Home / Hero Section -->
      <section id="home" class="hero-section">
        <div class="overlay"></div>
        <div class="hero-content">
          <a href="/" class="hero-logo-box">
            <span class="icon"><i class="fas fa-camera-retro"></i></span>
            Nexora
            <small>Photographer / San Francisco</small>
          </a>

          <h1>We Make<br />Something Great</h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts.
          </p>
          <a href="#contact" class="cta-button">Contact Us</a>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="ftco-about img ftco-section">
        <div class="container">
          <div class="row d-flex no-gutters">
            <!-- Left: Image + Video -->
            <div class="col-md-6 col-lg-6 d-flex">
              <div class="img-about img d-flex align-items-stretch">
                <div class="overlay"></div>
                <div
                  class="img img-video d-flex align-self-stretch align-items-center"
                  style="background-image: url('/about-2.webp');"
                >
                  <div class="video justify-content-center">
                    <a
                      href="https://vimeo.com/45830194"
                      class="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                    >
                      <span class="ion-ios-play"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Text Content -->
            <div class="col-md-6 col-lg-6 pl-md-5">
              <div class="heading-section">
                <h2 class="mb-4">
                  Snapshot is A Creative Direction, <br />
                  Photography Agency
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it with the
                  necessary regelialia...
                </p>

                <div class="counter-wrap d-flex my-md-4">
                  <div class="text">
                    <p class="mb-4">
                      <span class="number">120</span>
                      <span>Project complete</span>
                    </p>
                  </div>
                </div>

                <!-- Side-by-side images -->
                <div class="d-flex w-100">
                  <div
                    class="img img-about-2 mr-2"
                    style="background-image: url('/about.jpg');"
                  ></div>
                  <div
                    class="img img-about-2 ml-2"
                    style="background-image: url('/about-3.jpg');"
                  ></div>
                </div>

                <!-- Quote -->
                <blockquote class="blockquote mt-5">
                  <p class="mb-2">
                    "Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia.."
                  </p>
                  <span>— Lucy Lee</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Work / Portfolio Section -->
      <section id="work" class="portfolio">
        <div class="container">
          <h2>My Work</h2>
          <div class="grid">
            <PortfolioItem
              v-for="(img, index) in images"
              :key="index"
              :src="img"
            />
          </div>
        </div>
      </section>

      <!-- Contact / Footer Section -->
      <footer id="contact" class="footer">
        <p>© 2025 Sanjee. All rights reserved.</p>
      </footer>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import Sidebar from '../components/Sidebar.vue';
import PortfolioItem from '../components/PortfolioItem.vue';

export default {
  components: { Sidebar, PortfolioItem },
  setup() {
    const images = ref([
      '/work1.jpg',
      '/work2.jpg',
      '/work3.jpg',
      '/work4.jpg'
    ]);
    return { images };
  }
};
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
