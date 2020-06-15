<template>
  <main class="container">
    {{ projects }}
  </main>
</template>

<script>
export default {
  components: {},

  computed: {
    projects() {
      return this.$store.getters['default/getProjects'];
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
