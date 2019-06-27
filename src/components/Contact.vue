<template>
  <section class="section">
    <div class="container">
      <div class="content is-medium">
        <div id="contact">
          <h1>Contact</h1>
          <p>
            依頼・ご相談等は下記メール、フォーム、もしくはtwitter等でご連絡ください。
          </p>
          <ul>
            <li>
              <a href="mailto:cheersbier@gmail.com">
                <font-awesome-icon
                  class="font-awesome-icon"
                  icon="envelope"
                />Mail
              </a>
            </li>
            <li>
              <a href="https://twitter.com/cheersbeer__" target="_blank">
                <font-awesome-icon
                  class="font-awesome-icon"
                  :icon="['fab', 'twitter']"
                />Twitter(@cheersbeer__)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App"
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
</style>
