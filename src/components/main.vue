<template>
  <div>
    <Header />
    <div id="main">
      <div id="content">
        <div class="content__1">
          <p class="fade__in__01">Yoshihide Tsukamoto</p>
          <p class="fade__in__02">Portfolio</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang=ts>
import Header from "../components/header.vue";
import { mapState, mapGetters } from "vuex";
import Scrollreveal from "scrollreveal";

export default {
  components: {
    Header,
  },
  computed: {
    ...mapState(["name"]),
    ...mapGetters(["fadeInConfig"]),
  },
  mounted(this: {fadeIn: Function}) {
    const height = window.innerHeight;
    const mainHeight = document.getElementById("main")!;
    const contentHeight = document.getElementById("content")!;
    mainHeight.style.height = height - 65 + "px";
    contentHeight.style.height = height - 65 + "px";
    this.fadeIn();
  },
  methods: {
    fadeIn(this: {fadeInConfig: Function }) {
      Scrollreveal().reveal(".fade__in__01", this.fadeInConfig(1000, 0, "left", true));
      Scrollreveal().reveal(".fade__in__02", this.fadeInConfig(1000, 500, "left", true));
    },
  },
};
</script>

<style scoped>
#main {
  height: 500px;
  border-top: 2px solid #d7000f;
  background-image: url("../assets/images/main.jpg");
}
#content {
  position: relative;
}
.content__1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  color: #eaf6fd;
  font-size: 8vw;
  opacity: 0.6;
}
</style>