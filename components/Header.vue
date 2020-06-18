<template>
  <header class="header">
    <div class="header__container">
      <!-- <h1 class="header__logo">Осипенков Евгений</h1> -->

      <my-menu class="header__menu" />
    </div>
  </header>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  components: {
    'my-menu': Menu,
  },
};
</script>

<style scoped>
.header {
  /* background: rgb(62,89,119); */
  /* background: linear-gradient(135deg, rgba(62,89,119,1) 0%, rgba(19,43,73,1) 100%); */
  position: relative;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.header__container {
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  /* justify-content: space-between; */
  /* justify-content: flex-end; */
  align-items: center;
}

.header__logo {
  color: #fff;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

.header__menu {
  /* width: 50%;
  min-width: 200px;
  max-width: 500px; */
}
</style>
