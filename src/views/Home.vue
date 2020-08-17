<template>
  <div class="main">
    <!-- <Header /> -->
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
  <div class="block block__05">

    <Sns />
  </div>
    <Footer />
  </div>
</template>

<script>
import HamburgerMenu from "@/components/hamburgerMenu";
// import Header from "@/components/header";
import Main from "@/components/main";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import Work from "@/components/work";
import Sns from "@/components/sns";
import Footer from "@/components/footer";

export default {
  name: "Home",
  components: {
    HamburgerMenu,
    // Header,
    Main,
    Profile,
    Skill,
    Work,
    Sns,
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
.title {
  font-size: 5vw;
  
}
.block__01 {
  background-color: #002a5b;
  z-index: 100;
}
.block__02 {
background-color: #dcd5c8;
z-index: 200;
}
.block__03 {
background-color: #150c15;
z-index: 300;
}
.block__04 {
background-color: darkgreen;
z-index: 400;
}
.block__05 {
background-color: darkorange;
z-index: 500;
}
</style>
