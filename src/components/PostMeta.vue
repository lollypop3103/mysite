<template>
  <div class="content">
    Posted {{ post.date }}.
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min read.</strong>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PostMeta',
  components: {},
  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },
});
</script>
