<template>
  <nav id="navbar" class="nav">
    <ul class="nav-menu">
      <li>
<a href="#home" class="dot" data-scroll="home" @click.prevent="scrollTo('home')"><span>Home</span></a>
      </li>
      <li>
<a href="#home" class="dot" data-scroll="home" @click.prevent="scrollTo('home')">
  <span>Home</span>
</a>      </li>
      <li>
        <a href="#services" class="dot" data-scroll="services"><span>Services</span></a>
      </li>
      <li>
        <a href="#work" class="dot" data-scroll="work"><span>Gallery</span></a>
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
methods: {
  scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  },

  onScroll() {
    const sections = ["home", "about", "services", "work", "contact"];
    const scrollPosition = window.scrollY + 10;

    let matched = false;

    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
          const activeDot = document.querySelector(`.dot[data-scroll="${id}"]`);
          if (activeDot) activeDot.classList.add("active");
          matched = true;
          break;
        }
      }
    }

    if (!matched && scrollPosition < 100) {
      document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
      const topDot = document.querySelector(`.dot[data-scroll="home"]`);
      if (topDot) topDot.classList.add("active");
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


.dot span {
  position: absolute;
  top: 50%;
  right: 150%;
  transform: translateY(-50%) translateX(20px);
  display: inline-block;
  opacity: 0;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  background-color: rgba(157, 143, 143, 0.2);
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 30px;
  font-size: 12px;
  transition: all 0.3s ease;
}

.dot:hover span {
  opacity: 1;
}
</style>
