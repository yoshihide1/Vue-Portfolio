<template>
  <div class="header">
    <div class="line"></div>
    <ul class="nav__menu">
      <li><a href="" class="nav__menu__link">Profile</a></li>
      <li><a href="" class="nav__menu__link">Skill</a></li>
      <li><a href="" class="nav__menu__link">Work</a></li>
      <li><a href="" class="nav__menu__link">SNS</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.header {
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: lightblue;
}
.nav__menu {
  display: flex;
  justify-content: flex-end;
}
.nav__menu__link {
  font-size: 1.2rem;
  margin-right: 3rem;
}
</style>