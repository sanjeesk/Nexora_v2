<template>
  <div id="app">
    <Sidebar />
    <div id="main-content">
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

<style>
#main-content {
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
