<template>
  <div class="grid-item">
    <img :src="src" alt="portfolio item" />
  </div>
</template>

<script>
export default {
  props: {
    src: String
  }
}
</script>
