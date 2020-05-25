<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <div id="intro">
            <h1 class="title">About</h1>
            <ul>
              <li>Name: 文 -Fumi-</li>
              <li>From: 滋賀</li>
              <li>Location: 埼玉</li>
              <li>
                Like:
                <ul>
                  <li><font-awesome-icon class="font-awesome-icon" icon="beer" />お酒</li>
                  <li><font-awesome-icon class="font-awesome-icon" icon="coffee" />コーヒー</li>
                  <li><font-awesome-icon class="font-awesome-icon" icon="music" />邦楽ロック</li>
                  <li><font-awesome-icon class="font-awesome-icon" icon="chess-board" />ボードゲーム</li>
                  <li><font-awesome-icon class="font-awesome-icon" icon="biking" />ロードバイク</li>
                  <li><font-awesome-icon class="font-awesome-icon" icon="baseball-ball" />横浜DeNAベイスターズ</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <div id="slills">
            <h1 class="title">Skills</h1>
            <ul>
              <li>
                プロダクション開発経験あり
                <ul>
                  <li>
                    <font-awesome-icon class="font-awesome-icon" :icon="['fab', 'js-square']" />JavaScript
                    <ul>
                      <li><font-awesome-icon class="font-awesome-icon" :icon="['fab', 'node']" />Node.js</li>
                      <li><font-awesome-icon class="font-awesome-icon" :icon="['fab', 'vuejs']" />Vue</li>
                    </ul>
                  </li>
                  <li><font-awesome-icon class="font-awesome-icon" :icon="['fab', 'php']" />PHP</li>
                  <li><font-awesome-icon class="font-awesome-icon" :icon="['fab', 'docker']" />Docker</li>
                  <li>k8s</li>
                  <li><font-awesome-icon class="font-awesome-icon" icon="gem" />Ruby(Ruby on Rails)</li>
                  <li>
                    <font-awesome-icon class="font-awesome-icon" icon="database" />RDB
                    <ul>
                      <li>MySQL</li>
                      <li>Oracle</li>
                    </ul>
                  </li>
                  <li>
                    <font-awesome-icon class="font-awesome-icon" icon="database" />NoSQL
                    <ul>
                      <li>Redis</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                開発経験あり
                <ul>
                  <li><font-awesome-icon class="font-awesome-icon" :icon="['fab', 'app-store-ios']" />iOS</li>
                  <li><font-awesome-icon class="font-awesome-icon" :icon="['fab', 'react']" />React</li>
                  <li><font-awesome-icon class="font-awesome-icon" :icon="['fab', 'python']" />Python</li>
                  <li><font-awesome-icon class="font-awesome-icon" :icon="['fab', 'java']" />Java</li>
                  <li><font-awesome-icon class="font-awesome-icon" icon="cogs" />Machine Learning</li>
                </ul>
              </li>
              <li>ベトナムでのオフショア開発経験あり(テックリード)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
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
