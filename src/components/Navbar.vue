<template>
  <header>
    <section class="hero is-primary is-medium">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <div class="Coves-bold">
                  <router-link to="/">
                    <font-awesome-icon
                      class="font-awesome-icon"
                      icon="beer"
                    />CheersBeer
                  </router-link>
                </div>
              </a>
              <span
                class="navbar-burger burger"
                data-target="navbarMenuHeroA"
                @click="toggleMenu"
                :class="{ 'is-active': isMenuActive }"
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div
              id="navbarMenuHeroA"
              class="navbar-menu"
              :class="{ 'is-active': isMenuActive }"
            >
              <div class="navbar-end">
                <div class="tabs is-one-quarter-desktop is-right Coves-light">
                  <ul>
                    <li @click="closeMenu">
                      <router-link to="/">
                        <font-awesome-icon
                          class="font-awesome-icon"
                          icon="home"
                        />Home
                      </router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/about">
                        <font-awesome-icon
                          class="font-awesome-icon"
                          icon="user"
                        />About
                      </router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/works">
                        <font-awesome-icon
                          class="font-awesome-icon"
                          icon="palette"
                        />Works
                      </router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/blog">
                        <font-awesome-icon
                          class="font-awesome-icon"
                          icon="book"
                        />Blog
                      </router-link>
                    </li>
                    <li @click="closeMenu">
                      <router-link to="/contact">
                        <font-awesome-icon
                          class="font-awesome-icon"
                          :icon="['far', 'address-card']"
                        />Contact
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
          <h1 class="title Coves-bold">CheersBeer</h1>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container Coves-light">
            <ul>
              <li @click="closeMenu">
                <router-link to="/">
                  <font-awesome-icon
                    class="font-awesome-icon"
                    icon="home"
                  />Home
                </router-link>
              </li>
              <li @click="closeMenu">
                <router-link to="/about">
                  <font-awesome-icon
                    class="font-awesome-icon"
                    icon="user"
                  />About
                </router-link>
              </li>
              <li @click="closeMenu">
                <router-link to="/works">
                  <font-awesome-icon
                    class="font-awesome-icon"
                    icon="palette"
                  />Works
                </router-link>
              </li>
              <li @click="closeMenu">
                <router-link to="/blog">
                  <font-awesome-icon
                    class="font-awesome-icon"
                    icon="book"
                  />Blog
                </router-link>
              </li>
              <li @click="closeMenu">
                <router-link to="/contact">
                  <font-awesome-icon
                    class="font-awesome-icon"
                    :icon="['far', 'address-card']"
                  />Contact
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "App",
  directives: {
    twemoji: {
      inserted(el) {
        el.innerHTML = twemoji.parse(el.innerHTML);
      }
    }
  },
  data: () => ({
    isMenuActive: false
  }),
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    closeMenu() {
      this.isMenuActive = false;
    }
  }
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
@import '../../node_modules/bulma.styl/bulma.styl';

@media screen and (min-width: 1024px) {
  .container {
    width: initial;
  }
}

.title {
  font-family: 'Coves Bold';
}

.navbar {
  @extend .hero.is-primary;
  background-color;
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
