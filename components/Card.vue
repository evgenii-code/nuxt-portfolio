<template>
  <section class="card">
    <div class="card__container">
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

      <ul class="card__links">
        <li class="card__item">
          <a
            class="card__link"
            :href="project.previewUrl"
            target="_blank"
            rel="noopener noreferrer"
            >Просмотр проекта</a
          >
        </li>

        <li class="card__item">
          <a
            class="card__link"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            >Просмотр кода</a
          >
        </li>
      </ul>
    </div>
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

        this.$store.dispatch('preview/definePreviewUrl', {
          payload: this.project.previewUrl,
        });
      }
    });

    this.observer.observe(this.$el);
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 110vh;
  justify-content: center; */
}

.card__container {
  width: 100%;
  background-color: #fff;
  padding: 40px;
  min-height: 300px;
  border-radius: 20px;
}

.card__title {
  color: #cb754e;
  margin-bottom: 20px;
  font-size: 24px;
}

.card__description >>> * {
  color: #183050;
}

.card__description >>> p {
  margin-bottom: 20px;
}

.card__description >>> ul {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
}

.card__description >>> li::before {
  content: '-';
  margin-right: 10px;
}

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

.card__links {
  margin: 0;
  padding: 0;
  list-style: none;
}

.card__item {
  margin: 0;
  margin-bottom: 20px;
}

.card__item:last-of-type {
  margin-bottom: 0;
}

.card__link {
  text-decoration: none;
  color: #cb754e;
  transition: 0.15;
}

.card__link:hover {
  text-decoration: underline;
  opacity: 0.7;
}

.fade {
  transition: opacity 0.3s ease;
}
</style>
