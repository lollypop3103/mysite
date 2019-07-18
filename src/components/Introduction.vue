<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <h1 class="title">About</h1>
          <ul>
            <li>Name: CheersBeer</li>
            <li>From: 滋賀</li>
            <li>Location: 埼玉</li>
            <li>
              Like:
              <ul>
                <li>
                  <font-awesome-icon
                    class="font-awesome-icon"
                    icon="coffee"
                  />コーヒー
                </li>
                <li>
                  <font-awesome-icon
                    class="font-awesome-icon"
                    icon="music"
                  />邦楽ロック
                </li>
                <li>ボードゲーム</li>
                <li>ロードバイク</li>
                <li>横浜DeNAベイスターズ</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <h1 class="title">Skills</h1>
          <ul>
            <li>
              <font-awesome-icon
                class="font-awesome-icon"
                :icon="['fab', 'vuejs']"
              />Vue - 2年
            </li>
            <li>
              <font-awesome-icon
                class="font-awesome-icon"
                :icon="['fab', 'js-square']"
              />JavaScript - 4年
            </li>
            <li>
              <font-awesome-icon
                class="font-awesome-icon"
                :icon="['fab', 'node']"
              />Node.js - 4年
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title">Career</h1>
          <ul>
            <li>2016/03 大学院卒(工学)</li>
            <li>2016/04 WEB系企業へ入社</li>
            <li>2018/03-2018/09 副業にて都内人工知能関連企業の手伝いを行う</li>
            <li>2019/06- 副業にて都内音楽系企業の手伝いを行う</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App"
};
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
