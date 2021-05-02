
<template>
  <nav
    class="navigation"
    v-bind:class="{
      'is-mobile' : this.isMobile,
      'is-mobile-displayed': this.isMobileDisplayed
    }"
  >
    <h2 class="visually-hidden">Navigation</h2>
    <div
      class="navigation__container"
      v-if="this.isDisplayed"
    >
      <router-link
        class="navigation__link"
        to="/home"
      >
        <span class="navigation__el">
          Home
        </span>
      </router-link>
      <router-link
        class="navigation__link"
        to="/beratung"
      >
        <span class="navigation__el">
          Beratung
        </span>
      </router-link>
      <router-link
        class="navigation__link"
        to="/ueber-mich"
      >
        <span class="navigation__el">
          Über mich
        </span>
      </router-link>

      <div class="navigation__contact">
        <span class="contact__address">
          Praxis Lutherhof<br>
          <a href="https://www.google.com/maps/place/Lutherstrasse+6,+8004+Z%C3%BCrich/@47.3739382,8.5274439,17z/data=!3m1!4b1!4m5!3m4!1s0x47900a1b36fadf71:0x48a0386d9f795e62!8m2!3d47.3739382!4d8.5296379" target="blank"> Lutherstrasse 6, 8004 Zürich</a><br><br>
        </span>
        +41 79 614 26 18<br>
        <a href="mailto:hallo@tinabeerli.ch" target="_blank">hallo@tinabeerli.ch</a>
      </div>
    </div>

    <div
      class="navigation__burger"
      v-on:click="displayMobileNavigation"
    >
      <div class="navigation__burger-line"></div>
      <div class="navigation__burger-bg"></div>
    </div>

    <div
      class="navigation__bg"
      v-on:click="closeMobileNavigation"
    >
    </div>
  </nav>

</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isDisplayed: false,
        isMobile: false,
        isMobileDisplayed: false,
        isMobileStep: 850
      }
    },
    mounted () {
      requestAnimationFrame(this.displayNav);

      window.addEventListener('resize', this.resizeLister);
      this.resizeLister();

      this.$router.beforeEach((to, from, next) => {
        this.closeMobileNavigation();
        next();
      });
    },
    methods: {
      displayNav: function () {
        this.isDisplayed = true;
      },
      resizeLister: function () {
        const windowW = window.innerWidth || document.documentElement.clientWidth ||
document.body.clientWidth;

        if (windowW <= this.isMobileStep && this.isMobile == false) {
          this.setMobileNavigation();
        } else if (windowW > this.isMobileStep && this.isMobile == true) {
          this.resetMobileNavigation();
        }
      },
      setMobileNavigation: function() {
        this.isMobile = true;
      },
      resetMobileNavigation: function () {
        this.isMobile = false;
        this.isMobileDisplayed = false;
      },
      displayMobileNavigation: function () {
        this.isMobileDisplayed = !this.isMobileDisplayed;
      },
      closeMobileNavigation: function () {
        if (this.isMobileDisplayed == true) {
          this.isMobileDisplayed = false;
        }
      }
    }
  });
</script>
