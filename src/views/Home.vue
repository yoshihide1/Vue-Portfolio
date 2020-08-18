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
  </div>
</template>

<script>
import HamburgerMenu from "@/components/hamburgerMenu";
import Main from "@/components/main";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import Work from "@/components/work";
import Footer from "@/components/footer";

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
    return {};
  },
};
</script>
<style>
@import url("../assets/reset.css");
.block {
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.block__footer {
  height: 10vh;
  top: 100px;
  background-color: white;
  z-index: 1000;
}
.title {
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
.block__05 {
  background-color: darkorange;
  z-index: 500;
}
</style>
