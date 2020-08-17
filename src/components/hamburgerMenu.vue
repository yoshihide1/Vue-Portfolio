<template>
  <div>
    <transition name="fade">
      <div v-show="scroll > 150">
        <div class="hamburger__btn" @click="activeBtn =! activeBtn">
          <span class="line line__01" :class="{'btn__line01': activeBtn}"></span>
          <span class="line line__02" :class="{'btn__line02': activeBtn}"></span>
          <span class="line line__03" :class="{'btn__line03': activeBtn}"></span>
        </div>
      </div>
    </transition>
    <transition name="menu">
      <div class="menu" v-show="activeBtn" @click="activeBtn = false">
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
    <transition name="fade">
      <div v-show="topBtn > 800" @click="scrollTop" class="top__scroll">
       
          <span class="top__btn">⇪</span>
       
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hamburgerMenu: true,
      activeBtn: false,
      header: "#header",
      profile: "#profile",
      skill: "#skill",
      work: "#work",
      sns: "#sns",
      scrollY: 0,
      scroll: 0,
      topBtn: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      if (this.scrollY) return;
      this.scrollY = setTimeout(() => {
        this.scroll = window.scrollY;
        this.topBtn = window.scrollY;
        clearTimeout(this.scrollY);
        this.scrollY = 0;
      }, 200);
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      }) 
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.top__scroll {
}
.top__btn {
  z-index: 1000;
  position: fixed;
  bottom: 10px;
  right: 0;
  font-size: 50px;
  width: 70px;
  height: 70px;
  line-height: 70px;
  cursor: pointer;
  color: #eaf6fd;
  background-color: #002a5b;
  border-radius: 50%;
}
/*ハンバーガーメニュー*/
.hamburger__btn {
  position: fixed;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  cursor: pointer;
  z-index: 1000;
  background-color: #002a5b;
  border-radius: 50%;
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
  top: 23px;
  transition: 0.7s ease;
}
.hamburger__btn .line__02 {
  top: 33px;
  transition: 0.7s ease;
}
.hamburger__btn .line__03 {
  top: 43px;
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
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
.menu-leave,
.menu-enter-to {
  opacity: 1;
}
.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}
.menu {
  background-color: rgba(197, 197, 197, 0.671);
  z-index: 900;
  padding: 2rem 1rem;
  position: fixed;
  width: 20rem;
  height: 80rem;
  top: 0;
  right: 0;
}
.menu a {
  font-size: 2rem;
}
.menu ul {
  margin: 1rem;
  padding: 0;
}
</style>