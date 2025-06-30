<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    import("./assets/js/theme.js").then((module) => {
      if (module.initThemeScripts) module.initThemeScripts();
    });
  },
};
</script>
