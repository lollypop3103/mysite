<template>
  <div class="skills">
    <skills />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Skills from '@/components/Skills.vue';

export default Vue.extend({
  components: {
    Skills,
  },
  metaInfo() {
    return {
      title: 'Skills',
      meta: [{ name: 'author', content: 'Cheers Beer' }],
    };
  },
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
