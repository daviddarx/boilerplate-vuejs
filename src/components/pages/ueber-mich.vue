
<template>
  <div
    class="about"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content__container">
      <h2 class="visually-hidden">
        {{aboutme.title}}
      </h2>

      <img
        src="../../../static/images/tina_beerli.jpg"
        alt="Tina Beerli – Tina Beerli – Psychologische Beratung und Coaching"
        class="content__portrait"
        ref="image"
      />

      <div
        class="content__md"
        v-html="getHTMLfromMD(aboutme.content)"
      >
      </div>
    </div>
    <background-decoration
      ref="bgDeco"
      v-bind:image1URL="'/images/faden/faden_03_1.jpg'"
      v-bind:image2URL="'/images/faden/faden_03_2.jpg'"
    >
    </background-decoration>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as aboutme from '../../../content/uebermich/uebermich.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';
  import BackgroundDecoration from '../background-decoration.vue';

  export default Vue.extend({
    components: {
      'background-decoration': BackgroundDecoration
    },
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        aboutme: aboutme,
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
    },
    beforeDestroy () {
      this.$refs.bgDeco.destroy();
    },
    methods: {
      display: function() {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      }
    }
  });
</script>

