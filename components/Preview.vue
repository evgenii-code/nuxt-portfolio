<template>
  <div class="preview">
    <div
      :class="[
        'preview__container',
        {
          preview__container_align_left: getAlignDirection,
          preview__container_align_right: !getAlignDirection,
        },
      ]"
    >
      <div class="preview__window">
        <div class="preview__header">
          <div class="preview__controls">
            <div class="prewiew__circle prewiew__circle_color_red"></div>
            <div class="prewiew__circle prewiew__circle_color_orange"></div>
            <div class="prewiew__circle prewiew__circle_color_green"></div>
          </div>
        </div>

        <div class="preview__content">
          <transition name="fade" mode="out-in">
            <img
              :src="imageUrl"
              :key="imageUrl"
              alt="Preview image"
              class="preview__image"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getAlignDirection() {
      return this.$store.getters['preview/getAlignDirection'];
    },

    imageUrl() {
      return this.$store.getters['preview/getImageUrl'];
    },
  },
};
</script>

<style scoped>
.preview {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  z-index: 2;
}

.preview__container {
  width: 50%;
  position: relative;
  transition: 0.8s cubic-bezier(0.36, 0.015, 0, 1.155);
}

.preview__container_align_left {
  left: 0;
  transform: translate(10%) perspective(254px) rotateX(2deg) rotateY(7deg);
}

.preview__container_align_right {
  left: 100%;
  transform: translate(-110%) perspective(254px) rotateX(2deg) rotateY(-7deg);
}

.preview__container::before {
  display: block;
  content: '';
  width: 100%;
  padding-bottom: 100%;
}

.preview__window {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 20px;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: grid;
  grid-template-rows: 8% 1fr;
}

.preview__header {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #dfdddf;
}

.preview__controls {
  display: grid;
  width: 15%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10%;
  margin-left: 3%;
}

.prewiew__circle {
  position: relative;
  border-radius: 50%;
  width: 100%;
  padding-bottom: 100%;
}

.prewiew__circle_color_red {
  background-color: #fb6058;
}

.prewiew__circle_color_orange {
  background-color: #fcbf2f;
}

.prewiew__circle_color_green {
  background-color: #2ecd41;
}

.preview__content {
  background-color: #fff;
}

.preview__image {
  width: 100%;
  object-fit: cover;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
