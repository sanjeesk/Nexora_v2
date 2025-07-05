<template>
    <main class="home bg-black text-white overflow-x-hidden">
        <!-- Hero -->
        <section id="home" class="hero-section" data-animate="fade-up">
            <div class="overlay"></div>

            <div class="hero-content">
                <h1 class="logo log_sections-box">
                    <a class="hero-logo-box" href="#">
                        <span class="here_secrions-logo"> NEXORA </span>
                        <small> PIXEL SOLUTIONS</small>
                    </a>
                </h1>

                <h1 class="slider-hero">
                    We Make <br />
                    Something Great
                </h1>
                <p>Photographer | Web Services | Branding</p>

                <!-- <a href="#" class="hero-contact-btn">Contact us <span class="ion-ios-arrow-round-forward"></span></a> -->
            </div>
        </section>

        <!-- About -->
        <section class="ftco-about img ftco-section" id="about" data-animate="fade-left">
            <div class="container">
                <div class="row d-flex no-gutters">
                    <div class="col-md-6 col-lg-6 d-flex">
                        <div class="left-img"></div>
                    </div>
                    <div class="col-md-6 col-lg-6 pl-md-5">
                        <div class="heading-section ftco-animate fadeInUp ftco-animated">
                            <h2 class="mb-4">
                                We Are Nexora Pixel Solutions — <br />A Visual & Digital
                                Creative Agency
                            </h2>
                            <p class="about-decription">
                                At Nexora, we specialize in capturing moments, crafting digital
                                presence, and building brands that last. Whether it’s through
                                the lens of a camera, the pixels of a website, or the essence of
                                a logo, we bring your ideas to life with clarity and creativity.
                                <br />
                                Based in Malaysia, we work with clients across events, personal
                                brands, startups, and companies to deliver standout photography,
                                high-performing websites, and cohesive brand identities.
                            </p>

                            <div class="project_120">
                                <span>120</span>
                                <span class="project_120_left">Project complete</span>
                            </div>

                            <div class="d-flex w-100">
                                <div class="img img-about-2 mr-2">
                                    <div class="right-img1"></div>
                                </div>
                                <div class="img img-about-2 ml-2">
                                    <div class="right-img2"></div>
                                </div>
                            </div>

                            <div class="blockquote mt-5">
                                <p class="mb-2">
                                    "We don't just deliver visuals — we shape your story through
                                    powerful, pixel-perfect experiences."
                                </p>
                                <span>— Sri, Creative Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services -->
        <section id="services" class="ftco-section" data-animate="zoom-in">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-12 heading-section ftco-animate pb-5 fadeInUp ftco-animated">
                                <h2 class="mb-2">Our Creative Services</h2>
                                <p class="about-decription" style="margin-bottom: 0 !important">
                                    From capturing timeless visuals to building impactful online
                                    presence, we craft brands that connect and convert.
                                </p>
                            </div>
                        </div>

        <!-- Photography Service -->
        <div class="row mb-5">
          <div class="col-md-4">
            <div id="photography" class="media block-6 services d-block ftco-animate fadeInUp card_service" @click="scrollToSection(photographyRef)">
              <div class="icon"><span class="flaticon-video-camera"></span></div>
              <div class="media-body">
                <h3 class="heading mb-2" style="color: #9da1a5;">Photography</h3>
                <p class="about-decription" style="margin-bottom: 0 !important;">We provide professional photography services including event coverage, studio portraits, lifestyle shoots, and product photography.</p>
              </div>
            </div>
          </div>

                            <!-- Web Services -->
                            <div class="col-md-4">
                                <div id="webDetails"
                                    class="media block-6 services d-block ftco-animate fadeInUp card_service"
                                    @click="scrollToSection(webRef)">
                                    <div class="icon">
                                        <span class="flaticon-video-player"></span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="heading mb-2" style="color: #9da1a5">
                                            Web Services
                                        </h3>
                                        <p class="about-decription" style="margin-bottom: 0 !important">
                                            We design modern, fast, and responsive websites tailored
                                            to your business goals — from landing pages to full
                                            e-commerce stores.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Branding -->
                            <div class="col-md-4">
                                <div id="brandingDetails"
                                    class="media block-6 services d-block ftco-animate fadeInUp card_service"
                                    @click="scrollToSection(brandingRef)">
                                    <div class="icon">
                                        <span class="flaticon-video-player-1"></span>
                                    </div>
                                    <div class="media-body">
                                        <h3 class="heading mb-2" style="color: #9da1a5">
                                            Branding
                                        </h3>
                                        <p class="about-decription" style="margin-bottom: 0 !important">
                                            We build bold, beautiful brand identities from scratch or
                                            refine your existing brand to stand out in today’s crowded
                                            marketplace.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Side Image -->
                    <div class="col-md-3 d-flex align-items-stretch">
                        <div class="img w-100 left-img" style="min-height: auto !important"></div>
                    </div>
                </div>

                <!-- Progress Circles (unchanged, optional to keep) -->
                <div class="row progress-circle pt-md-5">
                    <div class="col-md-7 order-md-last py-md-5">
                        <div class="row">
                            <div class="col-md-4 mb-md-0 mb-4 ftco-animate fadeInUp">
                                <h2 class="text-center mb-4">Creative</h2>
                                <div class="progress mx-auto" data-value="90">
                                    <span class="progress-left">
                                        <span class="progress-bar border-primary"
                                            style="transform: rotate(144deg)"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar border-primary"
                                            style="transform: rotate(180deg)"></span>
                                    </span>
                                    <div
                                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div class="h5">90<sup class="small">%</sup></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-md-0 mb-4 ftco-animate fadeInUp">
                                <h2 class="text-center mb-4">Technical</h2>
                                <div class="progress mx-auto" data-value="80">
                                    <span class="progress-left">
                                        <span class="progress-bar border-primary"
                                            style="transform: rotate(108deg)"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar border-primary"
                                            style="transform: rotate(180deg)"></span>
                                    </span>
                                    <div
                                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div class="h5">80<sup class="small">%</sup></div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 mb-md-0 mb-4 ftco-animate fadeInUp">
                                <h2 class="text-center mb-4">Execution</h2>
                                <div class="progress mx-auto" data-value="75">
                                    <span class="progress-left">
                                        <span class="progress-bar border-primary"
                                            style="transform: rotate(90deg)"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar border-primary"
                                            style="transform: rotate(180deg)"></span>
                                    </span>
                                    <div
                                        class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div class="h5">75<sup class="small">%</sup></div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-md-4 mt-4">
                                <div class="col-md-8 ftco-animate fadeInUp">
                                    <p class="about-decription">
                                        We don’t just offer services — we build long-term value for
                                        your business through powerful storytelling, strategic
                                        design, and visual identity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 d-flex align-items-stretch">
                        <div class="img w-100 left-img" style="min-height: auto !important"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- photographyDetails -->
        <section id="photography" ref="photographyRef" class="ftco-section ftco-about text-light"
            data-animate="zoom-in">
            <div class="container">
                <!-- Title & Intro -->
                <div class="row">
                    <div class="col-md-12 heading-section ftco-animate pb-4 fadeInUp">
                        <h2 class="mb-2">Photography Services</h2>
                        <p class="about-decription mb-0">
                            We capture timeless memories — from Indian weddings and
                            engagements to birthdays and corporate events across Malaysia.
                        </p>
                    </div>
                </div>

                <!-- Sub Services -->
                <div class="row mb-4">
                    <!-- Left Column - 30% -->
                    <div class="col-md-4 d-flex flex-column gap-3">
                        <!-- Top Large Image with Overlay -->
                        <div class="position-relative rounded overflow-hidden" style="height: 280px; cursor: pointer"
                            @click="selectService(photographyServices[0])">
                            <img :src="photographyServices[0].image" class="w-100 h-100 object-cover" />
                            <div
                                class="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 text-white d-flex flex-column justify-content-end p-3">
                                <h5 class="mb-1">{{ photographyServices[0].title }}</h5>
                                <p class="mb-0 small">
                                    {{ photographyServices[0].description }}
                                </p>
                            </div>
                        </div>

                        <!-- 6 Services Grid (2 rows of 3) -->
                        <div class="row g-2">
                            <div v-for="(item, index) in photographyServices.slice(1, 7)" :key="index" class="col-4">
                                <div class="card h-100 text-white bg-dark border-0 rounded shadow-sm service-thumb"
                                    style="cursor: pointer" @click="selectService(item)">
                                    <img :src="item.image" class="card-img-top object-cover rounded-top"
                                        style="height: 90px" />
                                    <div class="card-body p-2">
                                        <h6 class="card-title mb-0 small">{{ item.title }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Extra Bottom Image (7th Thumbnail) -->
                        <div v-if="photographyServices[7]" class="mt-2 rounded overflow-hidden position-relative"
                            style="height: 120px; cursor: pointer" @click="selectService(photographyServices[7])">
                            <img :src="photographyServices[7].image" class="w-100 h-100 object-cover" />
                            <div class="position-absolute bottom-0 start-0 bg-dark bg-opacity-50 w-100 text-white p-2">
                                <h6 class="mb-0">{{ photographyServices[7].title }}</h6>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - 70% -->
                    <div class="col-md-8">
                        <!-- Carousel Preview -->
                        <div id="carouselPreview" class="carousel slide mb-2" data-bs-ride="carousel">
                            <div class="carousel-inner rounded">
                                <div v-for="(item, index) in previewImages" :key="index" class="carousel-item"
                                    :class="{ active: index === activePreviewIndex }">
                                    <transition name="fade">
                                        <img :src="previewImages[activePreviewIndex]"
                                            key="previewImages[activePreviewIndex]" class="d-block w-100 object-cover"
                                            style="height: 280px" />
                                    </transition>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselPreview"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselPreview"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>

                        <!-- Gallery Thumbnails -->
                        <div class="d-flex gap-2 mb-2 flex-wrap">
                            <img v-for="(thumb, index) in galleryThumbs" :key="'thumb-' + index" :src="thumb" :class="[
                                'rounded thumbnail',
                                { active: index === activePreviewIndex },
                            ]" style="
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
                  cursor: pointer;
                " @click="selectPreview(index)" />
                        </div>

                        <!-- Description -->
                        <!-- <div class="text-light bg-dark p-3 rounded">
          <h4 class="mb-2">{{ selectedService.title }}</h4>
          <p>{{ selectedService.description }}</p>
        </div> -->

                        <!-- test -->
                        <div class="row mb-4 heading-section">
                            <div class="col-md-12 ftco-animate fadeInUp">
                                <h2 class="mb-3 mt-4">Packages & Pricing</h2>
                            </div>
                            <div class="col-md-4" v-for="(pkg, index) in photographyPackages" :key="index">
                                <div class="media block-6 services d-block ftco-animate fadeInUp card_service h-100">
                                    <div class="media-body">
                                        <h2 class="heading mb-2">{{ pkg.name }}</h2>
                                        <p class="text-white mb-1">{{ pkg.price }}</p>
                                        <p class="about-decription mb-0">{{ pkg.details }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- webDetails -->
        <section id="webDetails" ref="webRef" class="ftco-section text-light" data-animate="zoom-in">
  <div class="container">
    <!-- Title & Intro -->
    <div class="row">
      <div class="col-md-12 heading-section ftco-animate pb-4 fadeInUp">
        <h2 class="mb-2">Web Design & Development</h2>
        <p class="about-decription mb-0">
          We build performance-driven websites — from portfolios and business sites to scalable e-commerce platforms.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="row mb-4">
      <!-- Left Column - 70% (Main Content) -->
      <div class="col-md-8">
        <!-- Carousel Preview -->
        <div class="carousel slide mb-3" id="carouselWebPreview" data-bs-ride="carousel">
          <div class="carousel-inner rounded">
            <div
              v-for="(item, index) in webPreviewImages"
              :key="index"
              class="carousel-item"
              :class="{ active: index === activeWebPreviewIndex }"
            >
              <transition name="fade">
                <img
                  :src="webPreviewImages[activeWebPreviewIndex]"
                  class="d-block w-100 object-cover"
                  style="height: 280px"
                />
              </transition>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselWebPreview" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselWebPreview" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>

        <!-- Gallery Thumbnails -->
        <div class="d-flex gap-2 mb-2 flex-wrap">
          <img
            v-for="(thumb, index) in webGalleryThumbs"
            :key="'web-thumb-' + index"
            :src="thumb"
            :class="['rounded thumbnail', { active: index === activeWebPreviewIndex }]"
            style="width: 50px; height: 50px; object-fit: cover; cursor: pointer"
            @click="selectWebPreview(index)"
          />
        </div>

        <!-- Packages -->
        <div class="row mb-4 heading-section">
          <div class="col-md-12 ftco-animate fadeInUp">
            <h2 class="mb-3 mt-4">Packages & Pricing</h2>
          </div>
          <div class="col-md-4" v-for="(pkg, index) in webPackages" :key="index">
            <div class="media block-6 services d-block ftco-animate fadeInUp card_service h-100">
              <div class="media-body">
                <h2 class="heading mb-2">{{ pkg.name }}</h2>
                <p class="text-white mb-1">{{ pkg.price }}</p>
                <p class="about-decription mb-0">{{ pkg.details }}</p>
              </div>
            </div>
          </div>
        </div>


                <!-- Fullscreen Image Modal -->
                <div v-if="modalImage" class="image-modal" @click.self="modalImage = null">
                    <img :src="modalImage" alt="Full Preview" />
                    <button class="close-btn" @click="modalImage = null">&times;</button>
                </div>
            </div>
        </section>


        <!-- photographyDetails -->
        <section id="photography" ref="photographyRef">
        hello
        </section>

              <!-- webDetails -->
        <section id="webDetails" ref="webRef">
        hello
        </section>

                      <!-- brandingDetails -->
        <section id="brandingDetails" ref="brandingRef">
        hello
        </section>





        <!-- Contact -->
        <section class="ftco-section contact-section" id="contact" data-animate="fade-left">
            <div class="container">
                <div class="row justify-content-center mb-5 pb-3">
                    <div class="col-md-4 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h2 class="mb-4">Contact Me</h2>
                        <p class="about-decription">
                            A small river named Duden flows by their place and supplies it
                            with the necessary regelialia. It is a paradisematic country.
                        </p>
                    </div>
                </div>

                <div class="row mb-5">
                    <div class="col-md-3 d-flex ftco-animate fadeInUp ftco-animated">
                        <div class="align-self-stretch box text-center p-4 alignment_center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fas fa-map-marker-alt"></span>
                            </div>
                            <div>
                                <h3 class="">Address</h3>
                                <p class="about-decription" style="margin-bottom: 0 !important">
                                    198 West 21th Street, Suite 721 New York NY 10016
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex ftco-animate fadeInUp ftco-animated">
                        <div class="align-self-stretch box text-center p-4 alignment_center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fas fa-phone"></span>
                            </div>
                            <div>
                                <h3 class="">Contact Number</h3>
                                <p style="margin-bottom: 0 !important">
                                    <a class="about-decription" href="tel://1234567920">+ 1235 2355 98</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex ftco-animate fadeInUp ftco-animated">
                        <div class="align-self-stretch box text-center p-4 alignment_center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fas fa-paper-plane"></span>
                            </div>
                            <div>
                                <h3 class="">Email Address</h3>
                                <p style="margin-bottom: 0 !important">
                                    <a class="about-decription" href="mailto:info@yoursite.com">info@yoursite.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex ftco-animate fadeInUp ftco-animated">
                        <div class="align-self-stretch box text-center p-4 alignment_center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fas fa-globe"></span>
                            </div>
                            <div>
                                <h3 class="">Website</h3>
                                <p style="margin-bottom: 0 !important">
                                    <a class="about-decription" href="#">yoursite.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row block-9">
                    <div class="col-md-6 ftco-animate fadeInUp ftco-animated">
                        <form action="#" class="contact-form p-4 p-md-5 py-md-5">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Name" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Email" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Subject" />
                            </div>
                            <div class="form-group">
                                <textarea name="" id="" cols="30" rows="7" class="form-control"
                                    placeholder="Message"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5" />
                            </div>
                        </form>
                    </div>

                    <div class="col-md-6 d-flex align-items-stretch">
                        <div id="map" style="position: relative; overflow: hidden">
                            <div style="
                  height: 100%;
                  width: 100%;
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  background-color: rgb(229, 227, 223);
                ">
                                <div class="gm-err-container">
                                    <div class="gm-err-content">
                                        <div class="gm-err-icon">
                                            <img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
                                                alt="" draggable="false" style="user-select: none" />
                                        </div>
                                        <div class="gm-err-title">Sorry! Something went wrong.</div>
                                        <div class="gm-err-message">
                                            This page didn't load Google Maps correctly. See the
                                            JavaScript console for technical details.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

// Tabs & modal
const activeTab = ref('tab1')
const modalImage = ref(null)

const getImageUrl = (tab, index) => {
    const label = getCategoryName(tab);
    return `https://via.placeholder.com/800x600?text=${label}+${index}`;
};

const getCategoryName = (tab) => {
    return {
        tab1: "Nature",
        tab2: "Portrait",
        tab3: "Urban",
        tab4: "Events",
    }[tab];
};

const portfolioItems = [
    { title: 'Designer Portfolio', description: 'Built with Vue 3 + Tailwind CSS for a freelance designer.' },
    { title: 'Tuition Centre Website', description: 'Corporate site with course info & registration form.' },
    { title: 'Landing Page – Event Planner', description: 'Facebook Ads landing page with WhatsApp CTA.' },
    { title: 'Mini Store for Home Baker', description: 'Shopify setup with 30+ products and custom branding.' }
]


const openModal = (img) => {
    modalImage.value = img;
};

// Refs for section scroll
const photographyRef = ref(null)
const webRef = ref(null)
const brandingRef = ref(null)

const scrollToSection = (sectionRef) => {
  if (sectionRef?.value) {
    sectionRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

// Animate on scroll
onMounted(() => {
  const elements = document.querySelectorAll('[data-animate]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  elements.forEach((el) => observer.observe(el))
})

</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.tabs {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
}

.tabs button {
    background: transparent;
    border: none;
    color: white;
    font-size: 1.1rem;
    padding: 10px 20px;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
}

.tabs button.active {
    border-color: white;
    font-weight: bold;
}

/* Gallery item */
.model {
    background-size: cover;
    background-position: center;
    height: 300px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: transform 0.3s ease;
}

.model:hover {
    transform: scale(1.02);
}

.model .desc {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 10px;
}

.model .desc .text h2 {
    font-size: 14px;
    margin: 0;
}

.model .desc .text span {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Fullscreen modal */
.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.95);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-modal img {
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

.close-btn {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 2.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}

.hero-section {
    position: relative;
    height: 100vh;
    background-image: url("/hero.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    overflow: hidden;
}

.overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero-content h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.5rem;
    letter-spacing: 1px;
}

.img-about {
    position: relative;
    width: 100%;
}

.img-video {
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.video {
    z-index: 2;
}

.icon-video {
    width: 60px;
    height: 60px;
    background-color: white;
    color: black;
    font-size: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    transition: 0.3s;
}

.icon-video:hover {
    background-color: #eee;
}

.img-about-2 {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 200px;
    flex: 1;
}

.number {
    font-size: 2rem;
    font-weight: bold;
    display: block;
}

.blockquote {
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-left: 4px solid white;
    margin-top: 40px;
}

[data-animate] {
    opacity: 0;
    transition: all 0.8s ease-out;
}

[data-animate="fade-up"] {
    transform: translateY(30px);
}

[data-animate="fade-left"] {
    transform: translateX(-30px);
}

[data-animate="zoom-in"] {
    transform: scale(0.95);
}

.animate[data-animate="fade-up"],
.animate[data-animate="fade-left"],
.animate[data-animate="zoom-in"] {
    opacity: 1;
    transform: none;
}

section {
    padding: 80px 0;
    color: #fff;
}

.hero-section {
    background-color: #000;
}

.ftco-about {
    background: linear-gradient(to bottom, #111, #0d0d0d);
}

#services {
    background-color: #121212;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

#work {
    background: radial-gradient(circle at center, #1a1a1a, #0e0e0e);
}

#contact {
    background-color: #101010;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.service-card img {
    height: 240px;
    object-fit: cover;
}

@media (max-width: 768px) {
    .service-card img {
        height: 160px;
    }
}

.thumbnail {
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    border: 2px solid transparent;
}

.thumbnail:hover {
    transform: scale(1.05);
}

.thumbnail.active {
    border-color: #0d6efd;
    box-shadow: 0 0 8px rgba(13, 110, 253, 0.6);
}
</style>
