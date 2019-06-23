<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <h1 class="title">CheersBeer</h1>
          <p>CheersBeerのポートフォリオ兼ブログです</p>
          <p>都内のWEB系企業でエンジニアとして働いています</p>
          <p>お気軽にコンタクトフォーム等でご連絡ください</p>
        </div>
        <div class="content" is-medium>
          <h1 class="title">Accounts</h1>
          <ul>
            <li>
              <a href="https://github.com/lollypop3103" target="_blank">
                <font-awesome-icon
                  class="font-awesome-icon"
                  :icon="['fab', 'github-square']"
                />Github
              </a>
            </li>
            <li>
              <a href="https://b.hatena.ne.jp/cheersBeer/" target="_blank">
                <font-awesome-icon
                  class="font-awesome-icon"
                  icon="bookmark"
                />Hatena
              </a>
            </li>
            <li>
              <a href="https://twitter.com/cheersbeer__" target="_blank">
                <font-awesome-icon
                  class="font-awesome-icon"
                  :icon="['fab', 'twitter']"
                />Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App"
});
</script>

<style lang="stylus" scoped>
@import '../../node_modules/bulma.styl/bulma.styl';

.font-awesome-icon {
  margin-right: 8px;
}

a {
  color: #4a4a4a;
}
</style>
