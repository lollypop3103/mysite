<template>
  <div class="works">
    <portfolio />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Portfolio from '@/components/Portfolio.vue';
export default Vue.extend({
  components: {
    Portfolio,
  },
  metaInfo() {
    return {
      title: 'Portfolio',
      meta: [{ name: 'author', content: 'Cheers Beer' }],
    };
  },
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
