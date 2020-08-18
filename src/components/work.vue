<template>
  <div id="work">
    <div class="work__line__right"></div>
    <div class="work__line__top">
      <span class="title title__work">Work</span>
    </div>
    <ul class="work__content">
      <li class="work__item">
        <div class="work__text">
          <p class="work__item__title">Oltower</p>

          <span
            class="work__text__skill"
          >Vue.js - Vuex - BootStrap - Firebase(Authentication,Cloud Firestore,Cloud Functions)</span>
          <a href="https://master.d1yt9wvipq1at3.amplifyapp.com/">
            <img src="../assets/images/oltower.png" alt />
          </a>
          <p class="work__item__text">
            旅行など、ちょっと遠くへ出かけたりするときに、
            計画を立てていく場合、サクっと大まかな移動時間と距離などがわかると
            時間の配分等も考えれて便利かなと思い作りました。
          </p>
          <p class="work__item__text">マップをクリック(タップ)でその周辺の色々な施設が検索できます。</p>
        </div>
      </li>
      <li class="work__item">
        <div class="work__text">
          <p class="work__item__title">コロナウイルス感染状況</p>
          <span
            class="work__text__skill"
          >Vue.js - Vuex - Node.js - MySQL - Chart.js - AWS(Lambda,RDS,CloudWatch) - CoreUI</span>
          <a href="https://master.d1yt9wvipq1at3.amplifyapp.com/">
            <img src="../assets/images/corona3.png" alt />
          </a>
          <p class="work__item__text">テレビ等の報道では感染者の数ばかり取り上げられていて、現在状況がしりたくて作りました。</p>
          <p class="work__item__text">チャートを利用したり、文字を色分けすることで見やすくしました</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title__work {
  color: #1a0b08;
}
.work__text {
  background-color: #1a0b08;
  height: 75vh;
  padding-top: 0.5rem;
}
.work__text__skill {
  color: #d2d5ec;
  top: 0.5rem;
  left: 1rem;
}
.work__item__text {
  left: 0;
  bottom: 0;
  padding: 0.5rem;
  color: #d2d5ec;
  text-align: left;
}

.work__item__title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #d2d5ec;
  margin-bottom: 0.5rem;
}
.work__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.work__item {
  width: 35vw;
  margin: 3.5vh;
}
.work__item img {
  display: block;
  width: 35vw;
  height: 18vw;
  object-fit: contain;
  padding: 0 1rem;
  margin-top: 1rem;
}
.work__line__right {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #d2d5ec;
  width: 2px;
  height: 100vh;
  margin-right: 50px;
}
.work__line__top {
  border-bottom: 2px solid #d2d5ec;
}
</style>