<template>
  <div id="header__menu">
    <ul v-if="device ==='pc'" class="nav__menu">
      <li>
        <router-link class="nav__menu__link" v-scroll-to="'#profile'" to>Profile</router-link>
      </li>
      <li>
        <router-link class="nav__menu__link" v-scroll-to="'#skill'" to>Skill</router-link>
      </li>
      <li>
        <router-link class="nav__menu__link" v-scroll-to="'#work'" to>Work</router-link>
      </li>
      <li>
        <router-link class="nav__menu__link" v-scroll-to="'#footer'" to>SNS</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { mapState, mapGetters } from "vuex";
import Scrollreveal from "scrollreveal";
import { FadeInCongig } from "../store/type"

export default {
  name: "headerMenu",
  data() {
    return {
      hamburgerMenu: true,
      activeBtn: false,
    };
  },
  computed: {
    ...mapState(["device"]),
    ...mapGetters(["fadeInConfig"])
  },
  mounted(this: {fadeIn: Function}) {
    this.fadeIn();
  },
  methods: {
    fadeIn(this: {fadeInConfig: FadeInCongig}) {
      Scrollreveal().reveal(".nav__menu__link", this.fadeInConfig(1200, 0, "top", true, "500")
      );
    },
  },
};
</script>

<style scoped>
#header__menu {
  width: 100%;
  height: 65px;
  line-height: 65px;
}
.nav__menu {
  display: flex;
  justify-content: flex-end;
}
.nav__menu__link {
  color: #eaf6fd;
  font-size: 1.2rem;
  margin-right: 3rem;
}
@media screen and (max-width: 769px) {
  #header__menu {
    height: 85px;
  }
  .nav__menu {
    display: none;
  }
}
</style>