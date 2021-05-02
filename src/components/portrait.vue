
<template>
  <img
    src="../../static/images/tina_beerli.jpg"
    alt="Tina Beerli – Tina Beerli – Psychologische Beratung und Coaching"
    class="portrait"
    :class="{'is-displayed': this.isDisplayed, 'is-loaded': this.isLoaded}"
    v-on:load="this.loaded"
    ref="image"
  />
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isLoaded: false,
        isDisplayed: false
      }
    },
    mounted () {
      this.checkVisibility(this.$router.currentRoute.name);

      this.$router.afterEach((to, from) => {
        this.checkVisibility(to.name);
      })
    },
    methods: {
      loaded: function () {
        this.isLoaded = true;
      },
      checkVisibility: function (routeName) {
        if (routeName == 'ueber-mich') {
          setTimeout(() => {
            this.isDisplayed = true;
          }, 100)
        } else {
          this.isDisplayed = false;
        }
      }
    }
  });
</script>
