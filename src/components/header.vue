<template>
  <div id="header">
    <div class="line"></div>
    <ul class="nav__menu">
      <li><a href="#" v-scroll-to="profile" class="nav__menu__link">Profile</a></li>
      <li><a href="#" v-scroll-to="skill" class="nav__menu__link">Skill</a></li>
      <li><a href="#" v-scroll-to="work" class="nav__menu__link">Work</a></li>
      <li><a href="#" v-scroll-to="sns" class="nav__menu__link">SNS</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburgerMenu: true,
      activeBtn: false,
      profile: '#profile',
      skill: '#skill',
      work: '#work',
      sns: '#sns'
    }
  },
}
</script>

<style scoped>


#header {
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: #002a5b;
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