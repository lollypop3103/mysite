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
            <li>
              <p>
                <font-awesome-icon
                  class="font-awesome-icon"
                  :icon="['fab', 'google']"
                />Googleフォーム
              </p>
              <ul>
                <li>
                  <div class="field">
                    <label class="label">名前</label>
                    <div class="control has-icons-left has-icons-right">
                      <input class="input" type="text" />
                      <span class="icon is-small is-left">
                        <font-awesome-icon icon="user" />
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                      <input class="input" type="email" />
                      <span class="icon is-small is-left">
                        <font-awesome-icon icon="envelope" />
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="field">
                    <label class="label">メッセージ</label>
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder="Textarea"
                      ></textarea>
                    </div>
                  </div>
                </li>
                <br />
                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-link">Submit</button>
                  </div>
                  <div class="control">
                    <button class="button is-text">Cancel</button>
                  </div>
                </div>
              </ul>
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
