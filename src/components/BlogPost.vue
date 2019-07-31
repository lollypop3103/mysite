<template>
  <div>
    <section class="section">
      <div class="container">
        <div id="flow">
          <span class="flow-1"></span>
          <span class="flow-2"></span>
          <span class="flow-3"></span>
        </div>
        <div class="row columns">
          <!-- Check blog posts exist -->
          <div v-if="posts.length !== 0" class="blog-main">
            <div class="column is-one-third">
              <div
                v-for="post in posts"
                :key="post.id"
                v-bind:post="post"
                class="blog-post"
              >
                <router-link :to="linkResolver(post)">
                  <div class="card large">
                    <div class="card-image">
                      <figure class="image">
                        <img :src="post.data.image.url" alt="Thumbnail" />
                      </figure>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-content">
                          <p class="title is-4 no-padding">
                            {{ $prismic.richTextAsPlain(post.data.title) }}
                          </p>
                          <p class="subtitle is-6 blog-post-meta">
                            <span class="created-at">
                              {{
                                Intl.DateTimeFormat(
                                  "en-US",
                                  dateOptions
                                ).format(new Date(post.data.date))
                              }}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div class="content">
                        <p>{{ getFirstParagraph(post) }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <!-- If no blog posts return message -->
          <div v-else class="blog-main">
            <p>No Posts published at this time.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "blog-posts",
  data() {
    return {
      posts: [],
      dateOptions: { year: "numeric", month: "short", day: "2-digit" },
      linkResolver: this.$prismic.linkResolver
    };
  },
  methods: {
    getPosts() {
      //Query to get blog posts
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "post"), {
          orderings: "[my.post.date desc]"
        })
        .then(response => {
          this.posts = response.results;
          console.log(this.posts);
        });
    },
    //Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300;
      const slices = post.data.body;
      let firstParagraph = "";
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph) {
          if (slice.slice_type == "text") {
            slice.primary.text.forEach(function(block) {
              if (block.type == "paragraph") {
                if (!haveFirstParagraph) {
                  firstParagraph += block.text;
                  haveFirstParagraph = true;
                }
              }
            });
          }
        }
      });

      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(" ")) + "...";
      } else {
        return firstParagraph;
      }
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style scoped>
.image img {
  display: block;
  height: auto;
  width: 100%;
}

img {
  max-width: 100%;
}

.blog-post {
  margin-bottom: 3rem;
}
.blog-post h2 {
  margin: 0;
}
.blog-post-meta {
  color: #9a9a9a;
  font-family: "Lato", sans-serif;
  margin-bottom: 8px;
  font-size: 16px;
}
</style>
