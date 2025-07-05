<template>
    <main class="home bg-black text-white overflow-x-hidden">
        <!-- Hero -->
        <section id="home" class="hero-section" data-animate="fade-up">
            <div class="overlay"></div>

            <div class="hero-content">

                <h1 class="logo log_sections-box">
                    <a class="hero-logo-box" href="#">
                        <span class=" here_secrions-logo"> NEXORA </span>
                        <small> PIXEL SOLUTIONS</small>
                    </a>
                </h1>

                <h1 class="slider-hero">We Make <br> Something Great</h1>
                <p>Photographer | Web Services | Branding</p>

                <!-- <a href="#" class="hero-contact-btn">Contact us <span class="ion-ios-arrow-round-forward"></span></a> -->

            </div>


        </section>

        <!-- About -->
        <section class="ftco-about img ftco-section" id="about" data-animate="fade-left">
            <div class="container">
                <div class="row d-flex no-gutters">
                    <div class="col-md-6 col-lg-6 d-flex">
                        <div class="left-img "></div>
                    </div>
                    <div class="col-md-6 col-lg-6 pl-md-5">
                        <div class="heading-section ftco-animate fadeInUp ftco-animated">
                            <h2 class="mb-4">We Are Nexora Pixel Solutions — <br>A Visual & Digital Creative Agency</h2>
                  <p class="about-decription">
            At Nexora, we specialize in capturing moments, crafting digital presence, and building brands that last. Whether it’s through the lens of a camera, the pixels of a website, or the essence of a logo, we bring your ideas to life with clarity and creativity.
            <br />
            Based in Malaysia, we work with clients across events, personal brands, startups, and companies to deliver standout photography, high-performing websites, and cohesive brand identities.
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
                                <p class="mb-2">"We don't just deliver visuals — we shape your story through powerful, pixel-perfect experiences."</p>
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
            <p class="about-decription" style="margin-bottom: 0 !important;">From capturing timeless visuals to building impactful online presence, we craft brands that connect and convert.</p>
          </div>
        </div>

        <!-- Photography Service -->
        <div class="row mb-5">
          <div class="col-md-4">
            <div class="media block-6 services d-block ftco-animate fadeInUp card_service" @click="scrollToSection(photographyRef)">
              <div class="icon"><span class="flaticon-video-camera"></span></div>
              <div class="media-body">
                <h3 class="heading mb-2" style="color: #9da1a5;">Photography</h3>
                <p class="about-decription" style="margin-bottom: 0 !important;">We provide professional photography services including event coverage, studio portraits, lifestyle shoots, and product photography.</p>
              </div>
            </div>
          </div>

          <!-- Web Services -->
          <div class="col-md-4">
            <div id="webDetails" class="media block-6 services d-block ftco-animate fadeInUp card_service" @click="scrollToSection(webRef)">
              <div class="icon"><span class="flaticon-video-player"></span></div>
              <div class="media-body">
                <h3 class="heading mb-2" style="color: #9da1a5;">Web Services</h3>
                <p class="about-decription" style="margin-bottom: 0 !important;">We design modern, fast, and responsive websites tailored to your business goals — from landing pages to full e-commerce stores.</p>
              </div>
            </div>
          </div>

          <!-- Branding -->
          <div class="col-md-4">
            <div id="brandingDetails" class="media block-6 services d-block ftco-animate fadeInUp card_service" @click="scrollToSection(brandingRef)">
              <div class="icon"><span class="flaticon-video-player-1"></span></div>
              <div class="media-body">
                <h3 class="heading mb-2" style="color: #9da1a5;">Branding</h3>
                <p class="about-decription" style="margin-bottom: 0 !important;">We build bold, beautiful brand identities from scratch or refine your existing brand to stand out in today’s crowded marketplace.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Side Image -->
      <div class="col-md-3 d-flex align-items-stretch">
        <div class="img w-100 left-img" style="min-height: auto !important;"></div>
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
                <span class="progress-bar border-primary" style="transform: rotate(144deg);"></span>
              </span>
              <span class="progress-right">
                <span class="progress-bar border-primary" style="transform: rotate(180deg);"></span>
              </span>
              <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                <div class="h5">90<sup class="small">%</sup></div>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-md-0 mb-4 ftco-animate fadeInUp">
            <h2 class="text-center mb-4">Technical</h2>
            <div class="progress mx-auto" data-value="80">
              <span class="progress-left">
                <span class="progress-bar border-primary" style="transform: rotate(108deg);"></span>
              </span>
              <span class="progress-right">
                <span class="progress-bar border-primary" style="transform: rotate(180deg);"></span>
              </span>
              <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                <div class="h5">80<sup class="small">%</sup></div>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-md-0 mb-4 ftco-animate fadeInUp">
            <h2 class="text-center mb-4">Execution</h2>
            <div class="progress mx-auto" data-value="75">
              <span class="progress-left">
                <span class="progress-bar border-primary" style="transform: rotate(90deg);"></span>
              </span>
              <span class="progress-right">
                <span class="progress-bar border-primary" style="transform: rotate(180deg);"></span>
              </span>
              <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                <div class="h5">75<sup class="small">%</sup></div>
              </div>
            </div>
          </div>

          <div class="p-md-4 mt-4">
            <div class="col-md-8 ftco-animate fadeInUp">
              <p class="about-decription">We don’t just offer services — we build long-term value for your business through powerful storytelling, strategic design, and visual identity.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-5 d-flex align-items-stretch">
        <div class="img w-100 left-img" style="min-height: auto !important;"></div>
      </div>
    </div>
  </div>
</section>






        <!-- Work -->
        <section id="work" class="ftco-section" data-animate="fade-up">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-md-6 heading-section text-center">
                        <h2 class="mb-4">Selected Projects</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                    </div>
                </div>

                <!-- Tabs -->
                <div class="tabs mb-4 text-center">
                    <button @click="activeTab = 'all'" :class="{ active: activeTab === 'all' }">All</button>
                    <button @click="activeTab = 'tab1'" :class="{ active: activeTab === 'tab1' }">Nature</button>
                    <button @click="activeTab = 'tab2'" :class="{ active: activeTab === 'tab2' }">Portrait</button>
                    <button @click="activeTab = 'tab3'" :class="{ active: activeTab === 'tab3' }">Urban</button>
                    <button @click="activeTab = 'tab4'" :class="{ active: activeTab === 'tab4' }">Events</button>
                </div>

                <!-- Gallery Grid -->
                <!-- Gallery Grid -->
                <div class="row no-gutters">
                    <template v-if="activeTab === 'all'">
                        <template v-for="(tab, tabIndex) in ['tab1', 'tab2', 'tab3', 'tab4']" :key="tab">
                            <template v-for="i in 2" :key="`${tab}-${i}`">
                                <div class="col-md-3 mb-4 px-2">
                                    <div class="model img d-flex align-items-end"
                                        :style="{ backgroundImage: `url(${getImageUrl(tab, i)})` }"
                                        @click="openModal(getImageUrl(tab, i))">
                                        <div class="desc w-100 px-3 py-2">
                                            <div class="text">
                                                <span>{{ getCategoryName(tab) }}</span>
                                                <h2>Sample Work {{ i }}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </template>

                    <template v-else>
                        <template v-for="i in 4" :key="`${activeTab}-${i}`">
                            <div class="col-md-3 mb-4 px-2">
                                <div class="model img d-flex align-items-end"
                                    :style="{ backgroundImage: `url(${getImageUrl(activeTab, i)})` }"
                                    @click="openModal(getImageUrl(activeTab, i))">
                                    <div class="desc w-100 px-3 py-2">
                                        <div class="text">
                                            <span>{{ getCategoryName(activeTab) }}</span>
                                            <h2>Sample Work {{ i }}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </template>
                </div>


                <!-- Fullscreen Image Modal -->
                <div v-if="modalImage" class="image-modal" @click.self="modalImage = null">
                    <img :src="modalImage" alt="Full Preview" />
                    <button class="close-btn" @click="modalImage = null">&times;</button>
                </div>
            </div>
        </section>


        <!-- photographyDetails -->
         <section id="photography" class="section-wrapper">
  <div class="container">
    <h2>Photography Services</h2>

    <!-- Sub-services -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
      <div
        v-for="(item, index) in photographyServices"
        :key="index"
        class="service-card"
        data-animate="fade-up"
      >
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <!-- Past Work -->
    <div class="past-work mb-12">
      <h3 class="text-2xl font-bold">Past Work</h3>
      <ul>
        <li>Indian Wedding – KL 2024</li>
        <li>Birthday Shoot – Shah Alam</li>
        <li>Corporate Launch – PJ</li>
      </ul>
    </div>

    <!-- Packages -->
    <div>
      <h3 class="text-2xl font-bold mb-4">Packages & Pricing</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(pkg, index) in photographyPackages"
          :key="index"
          class="package-box"
        >
          <h4>{{ pkg.name }}</h4>
          <p class="mb-1">{{ pkg.price }}</p>
          <p>{{ pkg.details }}</p>
        </div>
      </div>

      <div class="text-center">
        <button @click="scrollToSection(contactRef)" class="section-cta">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</section>




              <!-- webDetails -->
        <section id="webDetails" ref="webRef">
            <h2 class="text-3xl font-bold mb-8 text-center">Web Services</h2>

  <!-- Sub-services -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <div v-for="(item, index) in webServices" :key="index" class="bg-white rounded-xl p-6 shadow-md text-black">
      <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
      <p class="text-sm text-gray-600">{{ item.description }}</p>
    </div>
  </div>

  <!-- Past Work -->
  <div class="mb-12">
    <h3 class="text-2xl font-semibold mb-4">Past Work</h3>
    <ul class="list-disc pl-6 text-sm text-gray-300">
      <li>Portfolio for freelance designer – Vue + Tailwind</li>
      <li>Corporate website – Tuition Centre KL</li>
      <li>Landing page for FB ads – Event Planner</li>
      <li>Mini store setup for home baker – Shopify</li>
    </ul>
  </div>

  <!-- Packages -->
  <div>
    <h3 class="text-2xl font-semibold mb-4">Packages & Pricing</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
      <div v-for="(pkg, index) in webPackages" :key="index" class="bg-black border border-white p-4 rounded-xl">
        <h4 class="text-lg font-semibold">{{ pkg.name }}</h4>
        <p class="text-gray-400 mb-2">{{ pkg.price }}</p>
        <p class="text-sm text-gray-300">{{ pkg.details }}</p>
      </div>
    </div>
    <button @click="scrollToSection(contactRef)" class="bg-white text-black px-6 py-2 rounded-xl mt-4">
      Contact Us
    </button>
  </div>
        </section>

                      <!-- brandingDetails -->
        <section id="brandingDetails" ref="brandingRef">
<h2 class="text-3xl font-bold mb-8 text-center">Branding & UI/UX</h2>

  <!-- Sub-services -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <div v-for="(item, index) in brandingServices" :key="index" class="bg-white rounded-xl p-6 shadow-md text-black">
      <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
      <p class="text-sm text-gray-600">{{ item.description }}</p>
    </div>
  </div>

  <!-- Past Work -->
  <div class="mb-12">
    <h3 class="text-2xl font-semibold mb-4">Past Work</h3>
    <ul class="list-disc pl-6 text-sm text-gray-300">
      <li>Rebrand for Cafe Bloom – 2024</li>
      <li>Figma UI for KL-based Startup SaaS</li>
      <li>Instagram social kit for home decor brand</li>
    </ul>
  </div>

  <!-- Packages -->
  <div>
    <h3 class="text-2xl font-semibold mb-4">Packages & Pricing</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
      <div v-for="(pkg, index) in brandingPackages" :key="index" class="bg-black border border-white p-4 rounded-xl">
        <h4 class="text-lg font-semibold">{{ pkg.name }}</h4>
        <p class="text-gray-400 mb-2">{{ pkg.price }}</p>
        <p class="text-sm text-gray-300">{{ pkg.details }}</p>
      </div>
    </div>
    <button @click="scrollToSection(contactRef)" class="bg-white text-black px-6 py-2 rounded-xl mt-4">
      Contact Us
    </button>
  </div>
        </section>





        <!-- Contact -->
        <section class="ftco-section contact-section" id="contact" data-animate="fade-left">
            <div class="container">
                <div class="row justify-content-center mb-5 pb-3">
                    <div class="col-md-4 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h2 class="mb-4">Contact Me</h2>
                        <p class="about-decription">A small river named Duden flows by their place and supplies it with
                            the necessary regelialia.
                            It is a paradisematic country.</p>
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
                                <p class="about-decription" style="margin-bottom: 0 !important;">198 West 21th Street,
                                    Suite 721
                                    New York NY 10016</p>
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
                                <p style="margin-bottom: 0 !important;"><a class="about-decription"
                                        href="tel://1234567920">+
                                        1235 2355 98</a></p>
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
                                <p style="margin-bottom: 0 !important;"><a class="about-decription"
                                        href="mailto:info@yoursite.com">info@yoursite.com</a></p>
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
                                <p style="margin-bottom: 0 !important;"><a class="about-decription"
                                        href="#">yoursite.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row block-9">
                    <div class="col-md-6 ftco-animate fadeInUp ftco-animated">
                        <form action="#" class="contact-form p-4 p-md-5 py-md-5">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Name">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Email">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Subject">
                            </div>
                            <div class="form-group">
                                <textarea name="" id="" cols="30" rows="7" class="form-control"
                                    placeholder="Message"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
                            </div>
                        </form>
                    </div>

                    <div class="col-md-6 d-flex align-items-stretch">
                        <div id="map" style="position: relative; overflow: hidden;">
                            <div
                                style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);">
                                <div class="gm-err-container">
                                    <div class="gm-err-content">
                                        <div class="gm-err-icon"><img
                                                src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
                                                alt="" draggable="false" style="user-select: none;"></div>
                                        <div class="gm-err-title">Sorry! Something went wrong.</div>
                                        <div class="gm-err-message">This page didn't load Google Maps correctly. See the
                                            JavaScript console for technical details.</div>
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
import { ref, onMounted } from 'vue'

// Tabs & modal gallery logic
const activeTab = ref('tab1')
const modalImage = ref(null)

const getImageUrl = (tab, index) => {
  const label = getCategoryName(tab)
  return `https://via.placeholder.com/800x600?text=${label}+${index}`
}

const getCategoryName = (tab) => {
  return {
    tab1: 'Nature',
    tab2: 'Portrait',
    tab3: 'Urban',
    tab4: 'Events'
  }[tab]
}

const openModal = (img) => {
  modalImage.value = img
}

// Refs for each section
const photographyRef = ref(null)
const webRef = ref(null)
const brandingRef = ref(null)
const contactRef = ref(null)

// Scroll to section
const scrollToSection = (sectionRef) => {
  sectionRef?.value?.scrollIntoView({ behavior: 'smooth' })
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

// ----------------------------------------
// Service Content Data for each section
// ----------------------------------------

// Photography Sub-services
const photographyServices = [
  { title: 'Indian Wedding Photography', description: 'Traditional and candid wedding coverage for Indian ceremonies in Malaysia.' },
  { title: 'Engagement Shoots', description: 'Creative pre-wedding couple shoots with styled settings.' },
  { title: 'Birthday & Events', description: 'Coverage for 1st birthdays, baby showers, and special private events.' },
  { title: 'Corporate Events', description: 'Formal photography for launches, dinners, and office functions.' },
  { title: 'Studio Portraits', description: 'Indoor portraits for couples, families, or individuals.' },
  { title: 'Product Photography', description: 'Clean shots for businesses — ideal for websites and online catalogs.' }
]

// Photography Packages
const photographyPackages = [
  { name: 'Basic', price: 'RM 1,000', details: '1 photographer, 50 edited photos, Google Drive delivery.' },
  { name: 'Premium', price: 'RM 1,800', details: 'Full-day coverage, 100 edits, framed photo included.' },
  { name: 'Elite', price: 'RM 2,500', details: '2 photographers, video highlights, full album + framed prints.' }
]

// Web Services Sub-services
const webServices = [
  { title: 'Corporate Websites', description: 'Multi-page websites for SMEs and professional services.' },
  { title: 'One-Page Static Sites', description: 'Simple and fast-loading landing pages or personal websites.' },
  { title: 'Basic eCommerce Setup', description: 'Start your online store with up to 50 products (Shopify/static).' },
  { title: 'Portfolios', description: 'Sites for freelancers, designers, or creative professionals.' },
  { title: 'Landing Pages', description: 'Pages for campaigns, ads, or product launches.' },
  { title: 'Hosting & SEO', description: 'Help with domains, hosting, Google indexing, and metadata setup.' }
]

// Web Packages
const webPackages = [
  { name: 'Starter', price: 'RM 850', details: 'One-page static site, responsive and fast-loading.' },
  { name: 'Business Pro', price: 'RM 1,800', details: 'Up to 6 pages, contact forms, mobile-optimized.' },
  { name: 'Full Suite', price: 'RM 2,800', details: 'Includes branding, web build, domain, and setup.' }
]

// Branding Sub-services
const brandingServices = [
  { title: 'Logo Design', description: 'Custom logo creation aligned with your business identity.' },
  { title: 'Brand Guidelines', description: 'Typography, colors, and design rules in a clear PDF guide.' },
  { title: 'Website UI/UX', description: 'Modern web UI design using Figma or Adobe XD.' },
  { title: 'App UI/UX', description: 'Designing mobile interfaces and user flows for Android/iOS.' },
  { title: 'Social Media Kit', description: 'Branded templates for posts, stories, highlights, and ads.' },
  { title: 'Rebranding Services', description: 'Refresh or modernize your company’s old branding.' }
]

// Branding Packages
const brandingPackages = [
  { name: 'Logo Starter', price: 'RM 400', details: '2 logo concepts, 2 revisions, PNG + vector files.' },
  { name: 'Identity Pro', price: 'RM 1,200', details: 'Logo + color palette + fonts + brand guide PDF.' },
  { name: 'UI/UX Suite', price: 'RM 2,500', details: '5–7 screens designed, Figma prototype included.' }
]
</script>



<style scoped>
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
    background-image: url('/hero.jpg');
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
</style>