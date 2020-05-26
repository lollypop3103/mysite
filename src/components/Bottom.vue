<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="content has-text-centered">
        <p>Copyright (C) 2019 CheersBeer. All Rights Reserved.</p>
      </div>
      <div class="content has-text-centered">
        <div>
          <router-link to="/privacy-policy">プライバシーポリシー</router-link>
        </div>
        <div>
          <router-link to="/contact">お問い合わせ</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.footer {
  text-anchor: middle;
  vertical-align: middle;
  margin-top: auto;
  bottom: 0;
  padding: 3rem 1.5rem 3rem;
}
</style>
