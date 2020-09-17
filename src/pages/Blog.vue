<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <div class="outer-container">
            <div class="posts">
              <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true } }) {
    edges {
      node {
        id
        title
        date(format: "D. MMMM YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script lang="ts">
import Vue from 'vue';
import PostCard from '@/components/PostCard.vue';

export default Vue.extend({
  name: 'Blog',
  components: {
    PostCard,
  },
  metaInfo() {
    return {
      title: 'Blog',
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
