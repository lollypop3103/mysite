<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <p>CheersBeer's web site.</p>
          <p>
            都内のWEB系企業でエンジニアとして働いています。
            <br />楽をするための努力が好きです。
          </p>
          <p>仕事等の依頼はお気軽にコンタクトフォーム等でご連絡ください。</p>
        </div>
        <div class="content" is-medium>
          <h1 class="title">Accounts</h1>
          <ul>
            <li>
              <a href="https://github.com/cheersbeer" target="_blank">
                <font-awesome-icon class="font-awesome-icon" :icon="['fab', 'github-square']" />Github
              </a>
            </li>
            <li>
              <a href="https://b.hatena.ne.jp/cheersBeer/" target="_blank">
                <font-awesome-icon class="font-awesome-icon" icon="bookmark" />Hatena
              </a>
            </li>
            <li>
              <a href="https://twitter.com/cheersbeer__" target="_blank">
                <font-awesome-icon class="font-awesome-icon" :icon="['fab', 'twitter']" />Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Hello',
});
</script>
<style scoped>
@import './../../node_modules/bulmaswatch/yeti/bulmaswatch.min.css';
</style>
<style lang="stylus" scoped>
.font-awesome-icon {
  margin-right: 8px;
}

a {
  color: #4a4a4a;
}
</style>
