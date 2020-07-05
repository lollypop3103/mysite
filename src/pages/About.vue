<template>
  <div class="about">
    <introduction />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Introduction from '@/components/Introduction.vue';

export default Vue.extend({
  components: {
    Introduction,
  },
  metaInfo() {
    return {
      title: 'About',
      meta: [{ name: 'author', content: 'Cheers Beer' }],
    };
  },
});
</script>
