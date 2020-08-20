<template>
  <div>
    <Header />
    <div id="top">
      <div id="content">
        <div class="content__title">
          <p class="fade__in__01"><span class="top__name">Yoshihide Tsukamoto</span></p>
          <p class="fade__in__02"><span class="top__name">Portfolio</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Header from "../components/header.vue";
import { mapGetters } from "vuex";
import Scrollreveal from "scrollreveal";
import { FadeInCongig } from "../store/type"
export default {
  name: "top",
  components: {
    Header,
  },
  computed: {
    ...mapGetters(["fadeInConfig"]),
  },
  mounted(this: {fadeIn: Function}) {
    this.fadeIn();
  },
  methods: {
    fadeIn(this: {fadeInConfig: FadeInCongig }) {
      Scrollreveal().reveal(".fade__in__01", this.fadeInConfig(1300, 0, "left"));
      Scrollreveal().reveal(".fade__in__02", this.fadeInConfig(1300, 500, "left"));
    },
  },
};
</script>

<style scoped>
#top {
  height: 100vh;
  border-top: 2px solid #d7000f;
  background-image: url("../assets/images/main.jpg");
}
.top__name {
font-family: 'Caveat', cursive;}
.content__title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  color: #eaf6fd;
  font-size: 7vw;
  opacity: 0.6;
}
</style>