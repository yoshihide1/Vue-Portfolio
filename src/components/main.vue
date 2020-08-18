<template>
  <div>
    <Header v-if="name === 'pc'" />
    <div id="main">
      <div id="content">
        <div class="content__1">
          <p>Yoshihide Tsukamoto</p>
          <p>Portfolio</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang=ts>
import Header from "../components/header.vue";
import { mapState } from "vuex";
export default {
  components: {
    Header,
  },
  computed: {
    ...mapState(["name"]),
  },
  mounted() {
    const height = window.innerHeight;
    const mainHeight = document.getElementById("main")!;
    const contentHeight = document.getElementById("content")!;
    mainHeight.style.height = height - 65 + "px";
    contentHeight.style.height = height - 65 + "px";
  },
  methods: {},
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