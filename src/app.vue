
<template>
  <div
    class="website-container"
    v-bind:class="{
      'is-ios': this.isiOS,
      'is-android': this.isAndroid,
      'is-nav-absolute': this.isNavAbsolute
    }"
  >
    <h1 class="visually-hidden">Tina Beerli – Psychologische Beratung &amp; Coaching</h1>

    <logo></logo>

    <custom-navigation ref="nav"></custom-navigation>

    <portrait></portrait>

    <div class="content">
      <router-view
        :key="$route.fullPath"
        ref="view"
      >
      </router-view>

      <custom-contact class="contact--mobile"></custom-contact>

      <custom-footer></custom-footer>
    </div>

    <custom-contact></custom-contact>

    <custom-transition></custom-transition>
  </div>
</template>

<script>
  import Vue from "vue";
  import Logo from './components/logo.vue';
  import CustomNavigation from './components/navigation.vue';
  import CustomFooter from './components/footer.vue';
  import CustomContact from './components/contact.vue';
  import CustomTransition from './components/transition.vue';
  import Portrait from './components/portrait.vue';
  import browserDetect from './browser-detect';


  export default Vue.extend({
    components: {
      'logo': Logo,
      'custom-navigation': CustomNavigation,
      'custom-footer': CustomFooter,
      'custom-contact': CustomContact,
      'custom-transition': CustomTransition,
      'portrait': Portrait,
    },
    data() {
      return {
        isiOS: false,
        isAndroid: false,
        splashScreen: undefined,
        isLoaded: false,
        isNavAbsolute: false,
        displayAfterLoadedDelay: 500,
      }
    },
    computed: {
    },
    mounted () {
      this.splashScreen = document.querySelector('.splash');

      document.fonts.ready.then(() => {
        this.isLoaded = true;

        this.splashScreen.classList.add('hidden');

        setTimeout(() => {
          this.$refs.view.display();
        }, this.displayAfterLoadedDelay);
      });

      this.isiOS = browserDetect.isiOS;
      this.isAndroid = browserDetect.isAndroid;

      this.checkIfUserTouch();

      window.addEventListener('resize', this.resizeListener);
      this.resizeListener();
    },
    methods: {
      checkIfUserTouch: function () {
        window.isTouch = false;
        window.addEventListener('touchstart', this.touchListener);
      },
      touchListener: function (e) {
        window.isTouch = true;
        document.body.classList.add('is-touch');
        window.removeEventListener('touchstart', this.touchListener);
      },
      resizeListener: function () {
        const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
        const screenRatio = width/height;
        if (screenRatio > 2.6 && width > this.$refs.nav.isMobileStep) {
          this.isNavAbsolute = true;
        } else {
          this.isNavAbsolute = false;
        }
      }
    }
  });
</script>
