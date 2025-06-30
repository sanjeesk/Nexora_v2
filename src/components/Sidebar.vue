<template>
  <aside class="sidebar">
    <div class="logo">S</div>
    <nav>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
    </nav>
    <div class="socials">
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background: #111;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
}
.logo {
  font-size: 1.5rem;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
nav ul {
  list-style: none;
  padding: 0;
  text-align: center;
}
nav a {
  color: #fff;
  text-decoration: none;
  padding: 1rem 0;
  display: block;
}
.socials a {
  color: #aaa;
  margin: 0.5rem 0;
  display: block;
}
</style>
