<template>
  <div id="app" class="sf-site-all">
    <navbar />
    <router-view class="sf-site-content" />
    <bottom />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
import Bottom from '@/components/Bottom.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Bottom,
  },
};
</script>
<style>
.sf-site-all {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.sf-site-content {
  flex: 1;
}
</style>
