<template>
  <nav id="navbar" class="nav">
    <ul class="nav-menu">
      <li>
        <a href="#home" class="dot active" data-scroll="home"><span>Home</span></a>
      </li>
      <li>
        <a href="#about" class="dot" data-scroll="about"><span>About</span></a>
      </li>
      <li>
        <a href="#services" class="dot" data-scroll="services"><span>Services</span></a>
      </li>
      <li>
        <a href="#work" class="dot" data-scroll="work"><span>Gallery</span></a>
      </li>
      <li>
        <a href="#testimonial" class="dot" data-scroll="testimonial"><span>Testimony</span></a>
      </li>
      <li>
        <a href="#contact" class="dot" data-scroll="contact"><span>Contact</span></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const sections = ["home", "about", "services", "work", "testimonial", "contact"];
      let scrollPosition = window.scrollY;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop - 100) {
          document.querySelectorAll(".dot").forEach((el) => el.classList.remove("active"));
          const activeDot = document.querySelector(`.dot[data-scroll="${id}"]`);
          if (activeDot) activeDot.classList.add("active");
        }
      }
    }
  }
}
</script>

<style scoped>
/* Main nav container */
.nav {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
}

/* Vertical list */
.nav-menu {
  padding: 0;
  margin: 0;
  list-style: none;
}

/* Each nav item */
.nav-menu li {
  margin: 10px 0;
}

/* Dot itself */
.dot {
  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;
  background: #999;
  border-radius: 50%;
  transition: all 0.3s ease;
}

/* Active state */
.dot.active {
  background: #000;
}

/* Dot label */
.dot span {
  position: absolute;
  top: 50%;
  right: 150%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #000;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}

/* Show label on hover */
.dot:hover span {
  opacity: 1;
}

/* Optional: Smooth scroll (global style) */
html {
  scroll-behavior: smooth;
}
</style>
