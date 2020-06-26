<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="content has-text-centered privacy-policy">
        <router-link to="/privacy-policy">プライバシーポリシー</router-link>
      </div>
      <div class="content has-text-centered contact">
        <router-link to="/contact">お問い合わせ</router-link>
      </div>
      <div class="content has-text-centered copyright">
        <p>Copyright (C) 2019 CheersBeer. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style>
.footer {
  text-anchor: middle;
  vertical-align: middle;
  margin-top: auto;
  bottom: 0;
  padding: 3rem 1.5rem 3rem;
}

.footer-container {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  grid-template-areas:
    'privacy-policy contact'
    'copyright      copyright';
}

.privacy-policy {
  grid-area: privacy-policy;
}

.contact {
  grid-area: contact;
}

.copyright {
  grid-area: copyright;
}
</style>
