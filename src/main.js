// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ← import router


// import jQuery and any required libraries
import 'jquery'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'owl.carousel'
import 'magnific-popup'
import 'waypoints/lib/noframework.waypoints.min.js'
import 'scrollax'
// src/main.js or main.ts
import 'bootstrap/dist/css/bootstrap.min.css'


// Optional: import CSS if using CDN locally
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'magnific-popup/dist/magnific-popup.css'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'aos/dist/aos.css'
import 'magnific-popup/dist/magnific-popup.css'
import './assets/style/global.css' // Ensure this is the correct path to your style.css
import './assets/js/theme.js' // Ensure this is the correct path to your theme.js


const app = createApp(App)
  .use(router)               // ← add router
app.mount('#app')

// Then attach your jQuery script after DOM is ready
AOS.init({
  duration: 800,
  easing: 'slide',
})

$(document).ready(function () {
  // your full code block from above
})
