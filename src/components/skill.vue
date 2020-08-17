<template>
  <div id="skill">
    <div class="title"><span class="title__skill__span">Skill</span></div>
    <ul class="skill">
      <li class="skill__item">
        <img src="../assets/images/html-5.svg" alt />
      </li>
      <li class="skill__item">
        <img src="../assets/images/css-3.svg" alt />
      </li>
      <li class="skill__item">
        <img src="../assets/images/javascript.svg" alt />
      </li>
      <li class="skill__item">
        <img src="../assets/images/vue.svg" alt />
      </li>
      <li class="skill__item">
        <img src="../assets/images/firebase.svg" alt />
      </li>
      <li class="skill__item">
        <img src="../assets/images/bootstrap.svg" alt />
      </li>
      <li class="skill__item jquery">
        <img src="../assets/images/jquery.svg" alt />
      </li>
      <li class="skill__item">
        <img src="../assets/images/nuxt-icon.svg" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#skill {
  background-color: #002a5b;
}
.jquery img {
  background-color: yellow;
}
.skill {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.skill__item img {
  display: block;
  width: 14vw;
  height: 14vw;
  margin: 1rem;
  border-radius: 10px;
  object-fit: contain;
}
</style>