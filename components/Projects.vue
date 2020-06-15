<template>
  <section class="projects">
    <slot />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.projects {
  padding: 0 40px;
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
