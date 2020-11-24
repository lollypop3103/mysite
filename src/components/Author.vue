<template>
  <div class="author content has-text-centered">
    <g-image alt="Author image" class="image" src="~/assets/images/author.jpg" />

    <h1 v-if="showTitle">
      {{ $static.metadata.siteName }}
    </h1>

    <p>都内IT企業勤めのエンジニア。 Node.js、Vue、機械学習が好き。 Flutterが気になっている。</p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
