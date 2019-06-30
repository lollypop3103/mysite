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
              <form
                class
                action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSeGIWrMhWDw_sAt8oU3-1WtvUha7Uto3EzntLGqzUgtWhgu4A/formResponse"
                method="post"
                v-show="!submitted"
                name="gf_form"
                target="hidden_iframe"
                @submit.prevent="gf_submit()"
              >
                <ul>
                  <li>
                    <div class="field">
                      <label class="label">名前</label>
                      <div class="control has-icons-left has-icons-right">
                        <input
                          class="input"
                          type="text"
                          name="entry.1913741007"
                          value
                        />
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
                        <input
                          class="input"
                          type="email"
                          name="entry.1670423759"
                          value
                        />
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
                          name="entry.1307070095"
                          value
                        ></textarea>
                      </div>
                    </div>
                  </li>
                  <br />
                  <div class="field is-grouped">
                    <div class="control">
                      <button
                        class="button is-link"
                        type="submit"
                        name="button"
                      >
                        送信
                      </button>
                    </div>
                  </div>
                </ul>
              </form>
              <div v-show="submitted">
                <p>
                  送信しました。
                  <br />メッセージありがとうございます。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      formdata: {},
      submitted: false
    };
  },
  methods: {
    gf_submit: function() {
      document.gf_form.submit();
      this.submitted = true;
    }
  },
  mounted: function() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("name", "hidden_iframe");
    iframe.setAttribute("style", "display: none");
    document.body.appendChild(iframe);
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
</style>
