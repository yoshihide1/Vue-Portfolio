<template>
  <div class="header">
     <div v-show="hamburgerMenu">
      <div class="hamburger__btn" @click="activeBtn =! activeBtn">
        <span class="line line__01" :class="{'btn__line01': activeBtn}"></span>
        <span class="line line__02" :class="{'btn__line02': activeBtn}"></span>
        <span class="line line__03" :class="{'btn__line03': activeBtn}"></span>
      </div>
    </div>
    <transition name="menu">
      <div class="menu" v-show="activeBtn">
        <ul>
          <li>
            <a href="#" v-scroll-to="profile">Profile</a>
          </li>
          <li>
            <a href="#" v-scroll-to="skill">Skill</a>
          </li>
          <li>
            <a href="#" v-scroll-to="work">Work</a>
          </li>
          <li>
            <a href="#" v-scroll-to="sns">SNS</a>
          </li>
        </ul>
      </div>
    </transition>
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


.header {
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

/*ハンバーガーメニュー*/
.hamburger__btn {
  position: fixed;
  top: 0;
  right: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
}
.hamburger__btn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: white;
  text-align: center;
}
.hamburger__btn .line__01 {
  top: 16px;
  transition: 0.7s ease;
}
.hamburger__btn .line__02 {
  top: 26px;
  transition: 0.7s ease;
}
.hamburger__btn .line__03 {
  top: 36px;
  transition: 0.7s ease;
}
.btn__line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn__line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn__line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}
.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}
.menu {
  background-color: rgba(197, 197, 197, 0.671);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 20rem;
  height: 80rem;
  top: 0;
  right: 0;
}
.menu ul{
  margin: 1rem;
  padding: 0;
}

</style>