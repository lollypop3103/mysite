<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <div id="intro">
            <h1 class="title">About</h1>
            <ul>
              <li>
                Name
                <ul>
                  <li>文 -Fumi- (CheersBeer)</li>
                </ul>
              </li>
              <li>
                Like
                <ul>
                  <li><font-awesome-icon class="font-awesome-icon" :icon="['fa', 'glass-cheers']" />お酒</li>
                  <ul>
                    <li>
                      クラフトビール
                    </li>
                    <li>
                      日本酒
                    </li>
                  </ul>
                  <li><font-awesome-icon class="font-awesome-icon" icon="coffee" />コーヒー</li>
                  <ul>
                    <li>
                      ハンドドリップ
                    </li>
                  </ul>
                  <li><font-awesome-icon class="font-awesome-icon" icon="music" />邦楽ロック</li>
                  <ul>
                    <li>
                      UNISON SQUARE GARDEN
                    </li>
                    <li>
                      BUMP OF CHICKEN
                    </li>
                  </ul>
                  <li><font-awesome-icon class="font-awesome-icon" icon="chess-board" />ボードゲーム</li>
                  <ul>
                    <li>
                      ドミニオン
                    </li>
                  </ul>
                  <li><font-awesome-icon class="font-awesome-icon" icon="biking" />ロードバイク</li>
                  <ul>
                    <li>
                      2019 ツールド東北
                    </li>
                  </ul>
                  <li><font-awesome-icon class="font-awesome-icon" icon="baseball-ball" />野球</li>
                  <ul>
                    <li>横浜DeNAベイスターズ</li>
                  </ul>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Introduction',
});
</script>
<style lang="stylus" scoped>
.font-awesome-icon {
  margin-right: 8px;
}

a {
  color: #4a4a4a;
}
</style>
