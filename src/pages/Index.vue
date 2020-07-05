<template>
  <div class="home">
    <hello />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Hello from '@/components/Hello.vue';

export default Vue.extend({
  components: {
    Hello,
  },
  metaInfo() {
    return {
      title: 'Home',
      meta: [{ name: 'author', content: 'Cheers Beer' }],
    };
  },
});
</script>
