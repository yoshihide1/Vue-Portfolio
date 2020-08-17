<template>
  <div id="profile">
    <div class="profile__line"></div>
    <div class="profile__line__title">
      <span class="title title__profile">Profile</span>
    </div>
      <div class="profile__content__01"></div>
      <div class="profile__content__02"></div>
      <div class="profile__content__03"></div>
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
  background-color: #a2a2ad;
  width: 2px;
  height: 100vh;
  margin-right: 50px;
  
}
.profile__line__title {
  border-bottom: 2px solid #a2a2ad;

}
.title__profile {
  color: #1f1e63;
  
}
.profile__content {
  width: 50vw;
  height: 50vh;
  background-color: antiquewhite;
}
.profile__content__01 {
  position: absolute;
  top: 15vh;
  left: 40vw;
  height: 70vh;
  width: 40vw;
  background-color: #fff;
}
.profile__content__02 {
  position: absolute;
  top: 30vh;
  left: 25vw;
  height: 40vh;
  width: 20vw;
  background-color: #1f1e63;
}
.profile__content__03 {
  position: absolute;
  bottom: 0;
  right: 25vw;
  height: 24vh;
  width: 5vw;
  background-color: #a2a2ad;
}
</style>