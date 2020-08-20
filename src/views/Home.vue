<template>
  <div class="main">
    <HamburgerMenu />
    <div class="block block__01">
      <Main />
    </div>
    <div class="block block__02">
      <Profile />
    </div>
    <div class="block block__03">
      <Skill />
    </div>
    <div class="block block__04">
      <Work />
    </div>
    <div class="block block__footer">
      <Footer />
    </div>

    <!-- SP -->
    <!-- <div v-if="device === 'sp'">
      <HamburgerMenu />
      <div class="block block__01">
        <Main />
      </div>
      <div class="block block__02">
        <Profile />
      </div>
      <div class="block block__03">
        <Skill />
      </div>
      <div class="block block__04">
        <Work />
      </div>
      <div class="block block__footer">
        <Footer />
      </div>
    </div>-->
  </div>
</template>

<script>
import HamburgerMenu from "@/components/hamburgerMenu";
import Main from "@/components/main";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import Work from "@/components/work";
import Footer from "@/components/footer";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HamburgerMenu,
    Main,
    Profile,
    Skill,
    Work,
    Footer,
  },
  data() {
    return {
      deviceSize: 0,
      resizeTimer: null,
    };
  },
  computed: {
    ...mapState(["size", "device"]),
  },
  created() {
    this.deviceSize = window.innerWidth;
    this.$store.dispatch("getDeviceSize", this.deviceSize);
  },
  mounted() {
    window.addEventListener("resize", (e) => {
      if (this.resizeTimer) return;
      this.resizeTimer = setTimeout(() => {
        this.resizeTimer = null;
        this.deviceSize = e.target.innerWidth;
        this.$store.dispatch("getDeviceSize", this.deviceSize);
      }, 500);
    });
  },
  methods: {},
};
</script>
<style>
@import url("../assets/reset.css");
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Srisakdi:wght@700&display=swap');
.block {
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.block__footer {
  height: 15vh;
  top: 85vh;
  background-color: #494544;
  z-index: 1000;
}
.title {
  font-family: 'Caveat', cursive;
  font-size: 5vw;
}
.block__01 {
  background-color: #000;
  z-index: 100;
}
.block__02 {
  background-color: #494544;
  z-index: 200;
}
.block__03 {
  background-color: #150c15;
  z-index: 300;
}
.block__04 {
  background-color: #63676b;
  z-index: 400;
}

@media screen and (max-width: 769px) {
  .title {
    font-size: 8vw;
  }
  .block__footer {
    height: 10vh;
    top: 90vh;
  }
}
</style>
