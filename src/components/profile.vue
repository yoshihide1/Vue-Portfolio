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
          </div>
          <div>
            <p class="profile__text__title">ー名前ー</p>
            <p>
              <span class="profile__text__name">塚本 克秀</span>
            </p>
            <p class="profile__text__title">ー出身地ー</p>
            <p>兵庫県</p>
            <p class="profile__text__title">ー生年月日ー</p>
            <p>1988年 8月 13日</p>
            <p class="profile__text__title">ー趣味ー</p>
            <p>アクアリウム、読書、DIY</p>
          </div>
        </div>
        <p class="profile__text__title">ー自己紹介ー</p>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキト</p>
      </div>
    </div>
    <div class="profile__content__02"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile__line {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #c41a30;
  width: 2px;
  height: 100vh;
  margin-right: 50px;
}
.profile__line__title {
  border-bottom: 2px solid #c41a30;
}
.title__profile {
  color: #bac8c6;
}
.profile__text__title {
  margin-top: 0.5rem;
  font-size: 1.4vw;
}
.profile__text {
  display: flex;
  text-align: left;
  font-size: 1.6vw;
  margin-top: 1rem;
}
.profile__text img {
  margin-left: 1rem;
  margin-right: 2rem;
  height: 25vh;
}
.profile__text__name {
  font-size: 2vw;
}
.profile__image img {
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
  background-color: #bac8c6;
  color: #494544;
}
.profile__content__02 {
  position: absolute;
  bottom: 0;
  right: 25vw;
  height: 24vh;
  width: 5vh;
  background-color: #c41a30;
}
</style>