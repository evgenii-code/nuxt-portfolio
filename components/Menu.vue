<template>
  <nav class="menu">
    <nuxt-link class="menu__link" to="/">Главная</nuxt-link>
    <nuxt-link class="menu__link" to="/about">Обо мне</nuxt-link>
    <nuxt-link class="menu__link" to="/portfolio">Портфолио</nuxt-link>
    <nuxt-link class="menu__link menu__link_accented" to="/contacts"
      >Контакты &xrarr;</nuxt-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 2;
  /* width: 50%; */
  /* min-width: 200px;
  max-width: 500px; */
}

.menu__link {
  color: rgba(19, 43, 73, 1);
  /* color: #fff; */
  text-decoration: none;
  font-weight: bold;
  margin-right: 40px;
  transition: opacity 0.1s;
}

.menu__link:hover {
  opacity: 0.6;
}

.menu__link:last-of-type {
  margin-right: 0;
}

.menu__link_accented {
  /* justify-self: flex-end; */
  margin-left: auto;
  position: relative;
  /* color: #cb754e; */
  color: #fff;
  background-color: #cb754e;
  padding: 10px 20px;
  border-radius: 40px;
}
</style>
