<template>
  <section class="section">
    <div class="container">
      <div class="content is-medium">
        <!--
        <div id="portfolio">
          <section class="section">
            <div class="container">
              <div class="content"></div>
            </div>
          </section>
        </div>
        -->
        <div id="career">
          <div class="content">
            <h1 class="title">Career</h1>
            <ul>
              <li>2016/03 大学院卒(工学)</li>
              <li>2016/04 WEB系企業へ入社(現職)</li>
              <li>
                2018/03-2018/09 人工知能関連企業のWEB開発(副業)
              </li>
              <li>2019/06-2020/05 音楽系企業のWEB開発(副業)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Portfolio',
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
