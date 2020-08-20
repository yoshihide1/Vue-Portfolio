<template>
  <div id="profile">
    <div class="profile__line"></div>
    <div class="profile__line__title">
      <span class="title title__profile">Profile</span>
    </div>
    <div class="profile__contents">
      <div class="profile__text__contents">
        <img class="profile__image" src="../assets/images/me.jpg" alt />
        <p class="profile__text__title">ー名前ー</p>
        <p class="profile__text">塚本 克秀</p>
        <p class="profile__text__title">ー出身地ー</p>
        <p class="profile__text">兵庫県</p>
        <p class="profile__text__title">ー生年月日ー</p>
        <p class="profile__text">1988年 8月 13日</p>
        <p class="profile__text__title">ー趣味ー</p>
        <p class="profile__text">アクアリウム、読書、DIY</p>
      </div>
      <div>
        <p class="profile__text__title">ー自己紹介ー</p>
        <p class="profile__pr">あああああああああああああああああああああああああああああああああああああああああああ</p>
      </div>
    </div>
    <div class="profile__content__bar"></div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Scrollreveal from "scrollreveal";
import { FadeInCongig } from "../store/type";

export default {
  name: "profile",
  computed: {
    ...mapGetters(["fadeInConfig"]),
  },
  mounted(this: { fadeIn: Function }) {
    this.fadeIn();
  },
  methods: {
    fadeIn(this: { fadeInConfig: FadeInCongig }) {
      Scrollreveal().reveal(
        ".profile__image",
        this.fadeInConfig(800, 0, "bottom")
      );
      Scrollreveal().reveal(
        ".profile__text__title",
        this.fadeInConfig(800, 0, "left")
      );
      Scrollreveal().reveal(
        ".profile__text",
        this.fadeInConfig(1000, 500, "left")
      );
    },
  },
};
</script>

<style scoped>
.profile__line {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #d7000f;
  width: 2px;
  height: 100vh;
  margin-right: 50px;
}
.profile__line__title {
  border-bottom: 2px solid #d7000f;
}
.title__profile {
  color: #eaf6fd;
}
.profile__text__contents {
  padding: 0 0 1rem 1rem;
}
.profile__text__title {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  display: flex;
}
.profile__text {
  margin-top: 0.2rem;
  display: flex;
  text-align: left;
  font-size: 1rem;
}
.profile__text__name {
  font-size: 2vw;
}
.profile__image {
  margin: 1rem 1rem 0 1rem;
  border-radius: 25%;
  height: 18rem;
}
.profile__contents {
  margin: 10vh auto;
  height: 65vh;
  width: 60vw;
  background-color: #eaf6fd;
  color: #002a5b;
  display: flex;
  text-align: left;
  font-size: 1rem;
  line-height: 1rem;
}
.profile__content__bar {
  position: absolute;
  bottom: 0;
  right: 25vw;
  height: 24vh;
  width: 5vh;
  background-color: #d7000f;
}
.profile__text__pr {
  margin-top: 1rem;
  text-align: center;
}
.profile__pr {
  margin-top: 0.5rem;
}
@media screen and (max-width: 769px) {
  .profile__line {
    display: none;
  }
  .profile__text__contents {
    padding: 0;
  }
  .profile__contents {
    display: block;
    text-align: center;
    font-size: 1.2rem;
  }
  .profile__image img {
    height: 30vh;
  }
  .profile__text__title {
    display: block;
    font-size: 0.8rem;
  }
  .profile__text {
    display: inline-block;
  }
  .profile__contents {
    position: static;
    height: 90vh;
    width: 80%;
    margin-top: 1.5rem;
  }
  .profile__content__bar {
    right: 0;
    bottom: 5vh;
    height: 5vh;
    width: 20vw;
  }
  .profile__text__pr {
    font-size: 1rem;
  }
}
</style>