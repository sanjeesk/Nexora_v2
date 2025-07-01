<template>
  <footer class="ftco-footer py-5">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            &copy; {{ currentYear }} NEXORA Pixel Solutions. All rights reserved.
          </p>

          <ul class="ftco-footer-social p-0 footer_social">
            <li class="ftco-animate fadeInUp ftco-animated">
              <a href="#"><span class="fab fa-twitter"></span></a>
            </li>
            <li class="ftco-animate fadeInUp ftco-animated">
              <a href="#"><span class="fab fa-facebook-f"></span></a>
            </li>
            <li class="ftco-animate fadeInUp ftco-animated">
              <a href="#"><span class="fab fa-instagram"></span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
