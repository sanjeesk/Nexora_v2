<template>
  <div id="app" class="d-flex">
    <Sidebar />
    <div id="main-content" style="margin-left: 250px; width: calc(100% - 250px);">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Sidebar,
    Footer
  },
  mounted() {
    import("./assets/js/theme.js").then((module) => {
      if (module.initThemeScripts) module.initThemeScripts();
    });
  }
}
</script>
