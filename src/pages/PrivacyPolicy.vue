<template>
  <div class="privacy-policy">
    <privacy-policy />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PrivacyPolicy from '@/components/PrivacyPolicy.vue';

export default Vue.extend({
  components: {
    PrivacyPolicy,
  },
  metaInfo() {
    return {
      title: 'Privacy Policy',
      meta: [{ name: 'author', content: 'Cheers Beer' }],
    };
  },
});
</script>
