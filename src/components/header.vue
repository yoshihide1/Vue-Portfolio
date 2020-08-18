<template>
  <div id="header">
    <div class="line"></div>
    <ul class="nav__menu">
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

<script>
export default {
  data() {
    return {
      hamburgerMenu: true,
      activeBtn: false,
      profile: "#profile",
      skill: "#skill",
      work: "#work",
      sns: "#footer",
    };
  },
};
</script>

<style scoped>
#header {
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
</style>