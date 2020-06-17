<template>
  <section class="card">
    <h3 class="card__title">{{ project.name }}</h3>

    <vue-showdown class="card__description" :markdown="project.description" />

    <!-- <div class="card__image-container">
      <img
        class="card__image"
        :src="
          `https://www.master-7rqtwti-nrvhv2behmlpe.eu-4.platformsh.site${project.imageUrl.formats.medium.url}`
        "
        :alt="`${project.name} preview`"
      />
    </div> -->
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },

  data() {
    return {
      observer: null,
    };
  },

  mounted() {
    const regex = /(right)/g;

    this.observer = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        const isEntryAlignedToTheRight = Array.from(
          entry.target.classList
        ).some(c => regex.test(c));

        this.$store.dispatch('preview/changeAlign', {
          payload: isEntryAlignedToTheRight,
        });
        this.$store.dispatch('preview/defineImageUrl', {
          payload: `https://www.master-7rqtwti-nrvhv2behmlpe.eu-4.platformsh.site${this.project.imageUrl.formats.medium.url}`,
        });
      }
    });

    this.observer.observe(this.$el);
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  /* height: 110vh;
  justify-content: center; */
}

.card__title {
  color: #cb754e;
}

.card__description >>> * {
  color: #183050;
}

.card__description >>> ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* .card__description >>> li::before {
  content: '-';
  margin-right: 10px;
} */

.card__image-container {
  position: relative;
  width: 80%;
  border-radius: 20px;
  overflow: hidden;
}

.card__image-container::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 100%;
}

.card__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade {
  transition: opacity 0.3s ease;
}
</style>
