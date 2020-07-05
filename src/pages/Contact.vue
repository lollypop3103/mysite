<template>
  <div class="contact">
    <contact />
  </div>
</template>
<script>
import Vue from 'vue';
import Contact from '@/components/Contact.vue';
export default Vue.extend({
  components: {
    Contact,
  },
  metaInfo() {
    return {
      title: 'Contact',
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
