<template>
  <main class="main">
    <projects class="main__projects">
      <card
        :class="[
          'main__card',
          { main__card_align_left: project.id % 2 === 0 },
          { main__card_align_right: project.id % 2 !== 0 },
        ]"
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </projects>
  </main>
</template>

<script>
import Projects from '@/components/Projects';
import Card from '@/components/Card';

export default {
  components: {
    Projects,
    Card,
  },

  computed: {
    projects() {
      return this.$store.getters['default/getProjects'];
    },
  },
};
</script>

<style scoped>
.main {
  margin: 0 auto;
}

.main__projects {
  margin: 0 auto;
}

.main__card {
  max-width: 50%;
}

.main__card_align_left {
  align-self: flex-start;
}

.main__card_align_right {
  align-self: flex-end;
}
</style>
