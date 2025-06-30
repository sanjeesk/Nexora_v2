<template>
  <nav id="navbar" class="nav">
    <ul class="nav-menu">
      <li>
        <a class="dot" data-scroll="home" @click.prevent="scrollTo('home')"><span>Home</span></a>
      </li>
      <li>
        <a class="dot" data-scroll="about" @click.prevent="scrollTo('about')"><span>About</span></a>
      </li>
      <li>
        <a class="dot" data-scroll="services" @click.prevent="scrollTo('services')"><span>Services</span></a>
      </li>
      <li>
        <a class="dot" data-scroll="work" @click.prevent="scrollTo('work')"><span>Gallery</span></a>
      </li>
      <li>
        <a class="dot" data-scroll="contact" @click.prevent="scrollTo('contact')"><span>Contact</span></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll(); // run once on load
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -20;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    },
    onScroll() {
      const sections = ['home', 'about', 'services', 'work', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let matched = false;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            this.activateDot(id);
            matched = true;
            break;
          }
        }
      }

      if (!matched && scrollPosition < 100) {
        this.activateDot('home');
      }
    },
    activateDot(id) {
      document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
      const activeDot = document.querySelector(`.dot[data-scroll="${id}"]`);
      if (activeDot) activeDot.classList.add('active');
    }
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
}

.nav-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  position: relative;
  margin: 24px 0; /* Increase space between dots */
}

/* Dot style */
.dot {
  display: block;
  width: 14px;
  height: 14px;
  background: #aaa;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer; /* Pointer cursor */
}

/* Hover effect */
.dot:hover {
  transform: scale(1.2);
  background: #ccc;
}

/* Active effect (hollow ring) */
.dot.active {
  background: transparent;
  border: 2px solid #9dd8f8;
}

/* Ring around active dot */
.dot.active::after {
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: -3px;
  transform: translateY(-50%);
  border: 2px solid #9dd8f8;
  border-radius: 50%;
  box-sizing: border-box;
}

/* Label bubble */
.dot span {
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  opacity: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 13px;
  white-space: nowrap;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Arrow bubble tail */
.dot span::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid rgba(0, 0, 0, 0.7);
}

/* Show label on hover or active */
.dot:hover span,
.dot.active span {
  opacity: 1;
}

</style>
