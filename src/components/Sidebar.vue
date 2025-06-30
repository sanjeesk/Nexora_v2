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
/* Sidebar container */
.nav {
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
}

/* List items spacing */
.nav-menu li {
  margin: 24px 0; /* make dots further apart */
  list-style: none;
}

/* Base dot */
.dot {
  display: block;
  width: 12px;
  height: 12px;
  background: #9d9d9d;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Hover effect: scale and lighten */
.dot:hover {
  transform: scale(1.3);
  background: #cccccc;
}

/* Active state outer ring */
.dot.active {
  background: transparent;
  border: 2px solid #9d8f8f;
}

/* Inner ring effect like Snapshot */
.dot.active::after {
  content: '';
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  border: 2px solid #9d8f8f;
  border-radius: 50%;
  box-sizing: border-box;
}

/* Label bubble style */
.dot span {
  position: absolute;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  opacity: 0;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transition: opacity 0.3s ease 0.2s;
}

/* Triangle arrow tail on label */
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

/* Show label when hovered or active */
.dot:hover span,
.dot.active span {
  opacity: 1;
}
</style>
