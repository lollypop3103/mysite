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
        <p>{{ copyRight }}</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

const copyRight = `\u00a9 CheersBeer ${new Date().getFullYear()}. All Rights Reserved.`;

export default Vue.extend({
  name: 'App',
  data() {
    return {
      copyRight,
    };
  },
});
</script>

<style lang="stylus">
.footer {
  text-anchor: middle;
  vertical-align: middle;
  margin-top: auto;
  bottom: 0;
  padding: 3rem 1.5rem 3rem;

  &-container {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    grid-template-areas: 'privacy-policy contact' \  'copyright copyright';
  }
}

.privacy-policy {
  grid-area: privacy-policy;

  a {
    color: #007ca5;
  }
}

.contact {
  grid-area: contact;

  a {
    color: #007ca5;
  }
}

.copyright {
  grid-area: copyright;
}
</style>
