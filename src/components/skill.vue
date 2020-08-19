<template>
  <div id="skill">
    <div class="skill__line__left"></div>
    <div class="skill__line__top">
      <span class="title title__skill">Skill</span>
    </div>
    <ul class="skill">
      <li class="skill__item">
        <img src="../assets/images/html-5.svg" alt />
        <span class="skill__star">★★★☆☆</span>
      </li>
      <li class="skill__item">
        <img src="../assets/images/css-3.svg" alt />
        <span class="skill__star">★★★☆☆</span>
      </li>
      <li class="skill__item">
        <img src="../assets/images/javascript.svg" alt />
        <span class="skill__star">★★★☆☆</span>
      </li>
      <li class="skill__item">
        <img src="../assets/images/vue.svg" alt />
        <span class="skill__star">★★★☆☆</span>
      </li>
      <li class="skill__item">
        <img src="../assets/images/typescript-icon.svg" alt />
        <span class="skill__star">★★☆☆☆</span>
      </li>
      <li class="skill__item">
        <img src="../assets/images/nuxt-icon.svg" alt />
        <span class="skill__star">★★★☆☆</span>
      </li>
      <li class="skill__item jquery">
        <img src="../assets/images/jquery.svg" alt />
        <span class="skill__star">★★★☆☆</span>
      </li>
      <li class="skill__item">
        <img src="../assets/images/bootstrap.svg" alt />
        <span class="skill__star">★★★☆☆</span>
      </li>
      <li class="skill__item">
        <img src="../assets/images/firebase.svg" alt />
        <span class="skill__star">★★☆☆☆</span>
      </li>
      <li class="skill__item github">
        <img src="../assets/images/github-icon.svg" alt />
        <span class="skill__star">★★☆☆☆</span>
      </li>
      <li class="skill__item aws">
        <img src="../assets/images/aws.svg" alt />
        <span class="skill__star">★☆☆☆☆</span>
      </li>
    </ul>
    <div class="skill__line__bottom"></div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Scrollreveal from "scrollreveal";

export default {
  computed: {
    ...mapGetters(["fadeInConfig"]),
  },
  mounted(this: { fadeIn: Function }) {
    this.fadeIn();
  },
  methods: {
    fadeIn(this: { fadeInConfig: Function }) {
      Scrollreveal().reveal(".skill__item", this.fadeInConfig(800, 0, "bottom", true));
      Scrollreveal().reveal(".skill__star", this.fadeInConfig(800, 500, "left", true));
    },
  },
};
</script>

<style scoped>
.skill__line__left {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #9a1117;
  width: 2px;
  height: 100vh;
  margin-left: 50px;
}
.skill__line__top {
  border-bottom: 2px solid #9a1117;
}
.skill__line__bottom {
  border-bottom: 2px solid #9a1117;
}
.title__skill {
  color: #917c50;
}
.jquery img {
  background-color: yellow;
}
.github img {
  background-color: #9a1117;
}
.aws img {
  background-color: #fff;
}
.skill {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.skill__item {
  margin: 3.7vh;
}
.skill__item img {
  display: block;
  width: 10vw;
  height: 10vw;
  margin: 1rem;
  border-radius: 10px;
  object-fit: contain;
}
.skill__star {
  color: #917c50;
}
@media screen and (max-width: 769px) {
  .skill__line__left {
    display: none;
  }
  .skill__item {
    margin: 1rem;
  }
}
</style>