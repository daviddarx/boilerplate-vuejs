
<template>
  <div
  v-bind:class="{'is-faded' : this.isDecorationFadedOut}"
    class="background-decoration"
  >
    <img
      v-bind:src="this.image1URL"
      @load="image1Loaded"
      v-bind:class="{'is-loaded' : this.isImage1Loaded}"
      class="background-decoration__img background-decoration__img--1"
      alt="decoration"
      ref="img1"
    >
    <img
      v-bind:src="this.image2URL"
      @load="image2Loaded"
      v-bind:class="{'is-loaded' : this.isImage2Loaded, 'is-hidden': this.isImage2Displayed==false}"
      class="background-decoration__img background-decoration__img--2"
      alt="decoration"
      ref="img2"
    >
  </div>
</template>

<script>
  import debounce from 'lodash/debounce';

  export default {
    name: 'media-image',
    props: {
      image1URL: String,
      image2URL: String,
      animationArray: {
        type: Array,
        // default: () => [150, 150]
        default: () => [2000, 150, 150, 150, 150, 150]
      }
    },
    data() {
      return {
        animationTimeout: undefined,
        animationCurrentStep: 0,
        isImage1Loaded: false,
        isImage2Loaded: false,
        isImage2Displayed: false,
        scrollDebounced: undefined,
        isDecorationFadedOut: false,
        windowHRatioToFadeOut: 0.1,
      }
    },
    mounted () {
      this.startAnimation();
      this.scrollDebounced = debounce(this.scrollListener, 10);
      window.addEventListener('scroll', this.scrollDebounced);
    },
    methods: {
      startAnimation: function () {
        if (this.animationTimeout) stopAnimation();
        this.animationTimeout = setTimeout(this.tickAnimation, this.animationArray[0]);
      },
      stopAnimation: function () {
        clearTimeout(this.animationTimeout);
        this.animationTimeout = undefined;
      },
      tickAnimation: function () {
        this.animationCurrentStep++;
        if (this.animationCurrentStep >= this.animationArray.length) this.animationCurrentStep = 0;

        this.swapImage();

        this.animationTimeout = setTimeout(this.tickAnimation, this.animationArray[this.animationCurrentStep]);
      },
      swapImage: function () {
        this.isImage2Displayed = !this.isImage2Displayed;
      },
      image1Loaded: function () {
        this.isImage1Loaded = true;
      },
      image2Loaded: function () {
        this.isImage2Loaded = true;
      },
      scrollListener: function () {
        const windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        this.isDecorationFadedOut = (scrollTop >= windowH * this.windowHRatioToFadeOut);
      },
      destroy: function () {
        this.stopAnimation();
        window.removeEventListener('scroll', this.scrollDebounced);
      }
    }
  }
</script>
