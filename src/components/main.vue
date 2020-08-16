<template>
  <div id="main">
    <div id="line" />
    <div id="content">
      <div class="content__1"></div>
      <div class="content__2"></div>
    </div>
  </div>
</template>

<script lang=ts>
export default {
  mounted() {
    const height = window.innerHeight;
    const mainHeight = document.getElementById("main");
    const lineHeight = document.getElementById("line");
    const contentHeight = document.getElementById("content");
    mainHeight.style.height = height - 65 + "px";
    contentHeight.style.height = height - 65 + "px";
    lineHeight.style.height = height + "px";
  },
};
</script>

<style scoped>
#main {
  background-color: lightblue;
  height: 500px;
  border-top: 2px solid hotpink;
}
#line {
  position: absolute;
  top: 0;
  background-color: hotpink;
  width: 2px;
  height: 500px;
  margin-left: 100px;
}
#content {
  position: relative;
}
.content__1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  height: 25rem;
  width: 25rem;
  background-color: lightcoral;
}
.content__2 {
  position: absolute;
  top: 5%;
  left: 55%;
  transform: translate(-5%,0, 0, -55%);
  height: 13rem;
  width: 13rem;
  background-color: white;
}
.content__3 {
  position: absolute;
  top: 65%;
  left: 23%;
  transform: translate(-65%,0 , 0, -23%);
  height: 13rem;
  width: 13rem;

  background-color: white;
}
</style>