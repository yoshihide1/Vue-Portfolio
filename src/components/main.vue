<template>
  <div id="main">
    <div id="line" />
    <div id="content">
      <div class="content__1">
        <p>Hello World</p>
      </div>
    </div>
  </div>
</template>

<script lang=ts>
export default {
  mounted() {
    const height = window.innerHeight;
    const mainHeight = document.getElementById("main")!;
    const lineHeight = document.getElementById("line")!;
    const contentHeight = document.getElementById("content")!;
    mainHeight.style.height = height - 65 + "px";
    contentHeight.style.height = height - 65 + "px";
    lineHeight.style.height = height + "px";
  },
  methods: {},
};
</script>

<style scoped>
#main {
  background-color: #002a5b;
  height: 500px;
  border-top: 2px solid #d7000f;
}
#line {
  position: absolute;
  top: 0;
  background-color: #d7000f;
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
  transform: translate(-50%, -50%);
  height: 20rem;
  width: 35rem;
  background-color: #eaf6fd;
  color: #d7000f;
  font-size: 3rem;
}
</style>