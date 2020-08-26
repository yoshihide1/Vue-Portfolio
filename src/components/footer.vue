<template>
  <div id="footer">
    <div class="footer__sns">
      <ul class="sns__items">
        <li>
          <a href="https://twitter.com/@T_yoshihide_" target="_blank">
            <img src="../assets/images/twitter.svg" alt />
          </a>
        </li>
        <li>
          <a href="https://qiita.com/yoshihide_tsukamoto" target="_blank">
            <img src="../assets/images/qiita.png" alt />
          </a>
        </li>
        <li>
          <a href="https://github.com/yoshihide1/" target="_blank">
            <img src="../assets/images/github-icon-2.svg" alt />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/y.o.s.h.i.h.i.d.e" target="_blank">
            <img src="../assets/images/instagram-icon.svg" alt />
          </a>
        </li>
      </ul>
      <span class="copyright">©Yoshihide Tsukamoto</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer__sns {
  border-top: 2px solid #bac8c6;
  background-color: #494544;
  padding-bottom: 0.5rem;
}
.sns__items {
  display: flex;
  justify-content: center;
}
.sns__items img {
  width: 5vw;
  height: 5vw;
}
.sns__items li {
  margin: 1rem 2rem;
}
.copyright {
  color: #bac8c6;
  border-bottom: 2px solid #c41a30;
  padding: 0 1rem;
  margin-bottom: 0.5rem;
}
@media screen and (max-width: 769px) {
  #footer {
    height: 10vh;
    padding-bottom: 0.5rem;
  }
}
</style>