<template>
  <div class="tags">
    <g-link v-for="tag in post.tags" :key="tag.id" :to="tag.path" class="tag"> #{{ tag.title }} </g-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PostTags',
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
