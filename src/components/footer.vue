<template>
  <div id="footer">
   <div>
     <ul class="sns__items">
       <li><a href="https://twitter.com/@T_yoshihide_" target="_blank"><img src="../assets/images/twitter.svg" alt=""></a></li>
       <li><a href="https://github.com/yoshihide1/" target="_blank"><img src="../assets/images/github-icon.svg" alt=""></a></li>
       <li><a href="https://www.instagram.com/y.o.s.h.i.h.i.d.e" target="_blank"><img src="../assets/images/instagram-icon.svg" alt=""></a></li>
     </ul>
     <span>©Yoshihide Tsukamoto</span>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#footer {
  border-top: 2px solid #000;
}
.sns__items {
  display: flex;
  justify-content: center;
}
.sns__items img {
  width: 5vw;
}
.sns__items li {
  margin: 1rem 2rem;
}
</style>