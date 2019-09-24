<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <div class="outer-container">
            <h1>Page not found</h1>
            <div class="back">
              <router-link to="./">
                <font-awesome-icon
                  class="font-awesome-icon"
                  icon="home"
                />ホームに戻る
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "NotFound"
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
