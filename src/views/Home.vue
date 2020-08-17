<template>
  <div class="main">
    <Header />
    <Main />
    <Profile />
    <Skill />
    <Work />
    <Sns />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header";
import Main from "@/components/main";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import Work from "@/components/work";
import Sns from "@/components/sns"
import Footer from "@/components/footer";

export default {
  name: "Home",
  components: {
    Header,
    Main,
    Profile,
    Skill,
    Work,
    Sns,
    Footer,
  },
};
</script>
<style>
@import url("../assets/reset.css");
</style>
