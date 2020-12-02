<template>
  <header>
    <section class="hero is-primary is-medium">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand"></div>
            <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': isMenuActive }" v-show="isMenuActive">
              <div class="navbar-end">
                <div class="tabs is-one-quarter-desktop is-right Coves-light">
                  <ul>
                    <li @click="closeMenu">
                      <router-link to="/">
                        <font-awesome-icon class="font-awesome-icon" icon="home" />Home
                      </router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/about">
                        <font-awesome-icon class="font-awesome-icon" icon="user" />About
                      </router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/blog">
                        <font-awesome-icon class="font-awesome-icon" icon="book" />Blog
                      </router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/skills">
                        <font-awesome-icon class="font-awesome-icon" icon="star" /> Skills
                      </router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/works">
                        <font-awesome-icon class="font-awesome-icon" icon="palette" />Works
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title Coves-bold"><font-awesome-icon class="font-awesome-icon" icon="beer" />Fumi's web site</h1>
        </div>
      </div>
      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container Coves-light" :style="{ 'flex-grow': 0 }">
            <ul>
              <li @click="closeMenu">
                <router-link to="/"> <font-awesome-icon class="font-awesome-icon" icon="home" />Home </router-link>
              </li>
              <li @click="closeMenu">
                <router-link to="/about">
                  <font-awesome-icon class="font-awesome-icon" icon="user" />About
                </router-link>
              </li>
              <li @click="closeMenu">
                <router-link to="/blog"> <font-awesome-icon class="font-awesome-icon" icon="book" />Blog </router-link>
              </li>
              <li @click="closeMenu">
                <router-link to="/skills">
                  <font-awesome-icon class="font-awesome-icon" icon="star" /> Skills
                </router-link>
              </li>
              <li @click="closeMenu">
                <router-link to="/works">
                  <font-awesome-icon class="font-awesome-icon" icon="palette" />Works
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import twemoji from 'twemoji';

export default Vue.extend({
  name: 'Navbar',
  directives: {
    twemoji: {
      inserted(el) {
        el.innerHTML = twemoji.parse(el.innerHTML);
      },
    },
  },
  data: () => ({
    isMenuActive: false,
  }),
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    closeMenu() {
      this.isMenuActive = false;
    },
  },
});
</script>

<style lang="stylus">
@media screen and (min-width: 1024px) {
  .container {
    width: initial;
  }
}

.title {
  font-family: 'Coves Bold';
}

.a {
  color: #fff;
}

.navbar-item-link {
  color: #fff;
}

.Coves-light {
  font-family: 'Coves Light', -apple-system, BlinkMacSystemFont, Roboto, 'æ¸¸ã‚´ã‚·ãƒƒã‚¯ä½“', YuGothic, 'Yu Gothic Medium', sans-serif;
}

.Coves-bold {
  font-family: 'Coves Bold', -apple-system, BlinkMacSystemFont, Roboto, 'æ¸¸ã‚´ã‚·ãƒƒã‚¯ä½“', YuGothic, 'Yu Gothic Medium', sans-serif;
}

.font-awesome-icon {
  margin-right: 8px;
}
</style>
