<template>
  <div id="app" class="sf-site-all">
    <navbar />
    <router-view class="sf-site-content" />
    <bottom />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Bottom from '@/components/Bottom.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
    Bottom,
  },
});
</script>

<style lang="scss">
@import '../node_modules/bulma/bulma.sass';

.sf-site-all {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.sf-site-content {
  flex: 1;
}
</style>

<style>
@import '../node_modules/bulmaswatch/yeti/bulmaswatch.min.css';
</style>
