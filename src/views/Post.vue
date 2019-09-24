<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content is-medium">
          <div class="back">
            <router-link to="./">
              <font-awesome-icon
                class="font-awesome-icon"
                icon="list-ul"
              />ブログ一覧に戻る
            </router-link>
          </div>

          <h1 class="blog-title">
            {{ $prismic.richTextAsPlain(fields.title) }}
          </h1>
          <p class="blog-post-meta">
            <span class="created-at">
              {{
                Intl.DateTimeFormat("en-US", dateOptions).format(
                  new Date(fields.date)
                )
              }}
            </span>
          </p>
        </div>
        <!-- Slice Block Componenet tag -->
        <slices-block :slices="slices" />
      </div>
    </section>
  </div>
</template>

<script>
import SlicesBlock from "../components/SlicesBlock.vue";

export default {
  name: "post",
  components: {
    SlicesBlock
  },
  data() {
    return {
      dateOptions: { year: "numeric", month: "short", day: "2-digit" },
      documentId: "",
      fields: {
        title: null,
        date: null
      },
      slices: []
    };
  },
  methods: {
    getContent(uid) {
      //Query to get post content
      this.$prismic.client.getByUID("post", uid).then(document => {
        if (document) {
          this.documentId = document.id;
          this.fields.title = document.data.title;
          this.fields.date = document.data.date;

          //Set slices as variable
          this.slices = document.data.body;
        } else {
          //returns error page
          this.$router.push({ name: "not-found" });
        }
      });
    }
  },
  created() {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};
</script>

<style lang="stylus" scoped>
@import '../../node_modules/bulma.styl/bulma.styl';

.font-awesome-icon {
  margin-right: 8px;
}

a {
  color: #4a4a4a;
}

.blog-title {
  font-family: 'Coves Bold';
}

.created-at {
  font-family: 'Coves Light';
}

.post-part.single a {
  text-decoration: none;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0.8) 75%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0.8) 75%
  );
  background-repeat: repeat-x;
  background-size: 2px 2px;
  background-position: 0 23px;
}

.blog-post-meta {
  color: #9a9a9a;
  margin-bottom: 8px;
}

/* Media Queries */
@media (max-width: 767px) {
  .post-part pre {
    font-size: 14px;
  }

  .blog-post-meta {
    font-size: 16px;
  }
}

@media screen and (min-width: 768px) {
  .blog-post-meta {
    font-size: 16px;
  }
}
</style>
