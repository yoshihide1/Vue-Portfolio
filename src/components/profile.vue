<template>
  <div id="profile">
    <div class="profile__line"></div>
    <div class="profile__line__title">
      <span class="title title__profile">Profile</span>
    </div>
    <div class="profile__content__00">
      <div class="profile__content__01">
        <div class="profile__text">
          <div class="profile__image">
            <img src="../assets/images/me.jpg" alt />
            <div class="profile__text__contents">
              <p class="profile__text__title">
                ー名前ー
                <span class="profile__text">塚本 克秀</span>
              </p>

              <p class="profile__text__title">
                ー出身地ー
                <span class="profile__text">兵庫県</span>
              </p>
              <p class="profile__text__title">
                ー生年月日ー
                <span class="profile__text">1988年 8月 13日</span>
              </p>
              <p class="profile__text__title">
                ー趣味ー
                <span class="profile__text">アクアリウム、読書、DIY</span>
              </p>
            </div>
          </div>
          <div>
            <p class="profile__text__pr">ー自己紹介ー</p>
            <p
              class="profile__pr"
            >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキト</p>
          </div>
        </div>
      </div>
    </div>
    <div class="profile__content__02"></div>
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
        this.fadeInConfig(1000, 0, "left")
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
  background-color: #cee2df;
  width: 2px;
  height: 100vh;
  margin-right: 50px;
}
.profile__line__title {
  border-bottom: 2px solid #cee2df;
}
.title__profile {
  color: #cee2df;
}
.profile__text__contents {
  padding: 0 0 1rem 1rem;
}
.profile__text__title {
  margin-top: 1rem;
  font-size: 1rem;
  display: flex;
}
.profile__text {
  display: flex;
  text-align: left;
  font-size: 1.3rem;
}
.profile__text img {
  margin: 0 2rem 0 1rem;
  height: 25vh;
}
.profile__text__name {
  font-size: 2vw;
}
.profile__image img {
  margin: 1rem;
  border-radius: 30%;
  height: 40vh;
}
.profile__content__00 {
  height: 90vh;
  position: relative;
}
.profile__content__01 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 10vh;
  left: 0;
  margin: auto;
  height: 65vh;
  width: 60vw;
  background-color: #00213b;
  color: #cee2df;
}
.profile__content__02 {
  position: absolute;
  bottom: 0;
  right: 25vw;
  height: 24vh;
  width: 5vh;
  background-color: #cee2df;
}
.profile__text__pr {
  text-align: center;
}
@media screen and (max-width: 769px) {
  .profile__line {
    display: none;
  }
  .profile__text {
    display: block;
    text-align: center;
    font-size: 1.2rem;
  }
  .profile__text img {
    /* margin: 1rem 0 0 0; */
    height: 30vh;
  }
  .profile__text__title {
    font-size: 0.8rem;
  }
  .profile__content__00 {
    position: static;
    height: 90vh;
  }
  .profile__content__01 {
    position: static;
    height: 90vh;
    width: 80%;
    margin-top: 1.5rem;
  }
  .profile__content__02 {
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