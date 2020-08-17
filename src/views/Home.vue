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
/* a:hover {
  opacity: 0.4;
} */
.block {
  height: 100vh;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.title {
  font-size: 5vw;
  border-bottom: 2px solid #d7000f;
  border-top: 2px solid #d7000f;
  color: #eaf6fd;
}
.block__01 {
  background: chartreuse;
  z-index: 100;
}
.block__02 {
background-color: coral;
z-index: 200;
}
.block__03 {
background-color: cornflowerblue;
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
