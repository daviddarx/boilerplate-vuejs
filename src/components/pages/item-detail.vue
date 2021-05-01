
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h2>
      {{content.title}}
    </h2>
    <p>
      {{content.itemType}}
    </p>
    <p>
      {{content.desc}}
    </p>
    <img
      :src = content.image
      :alt = content.title
    >
  </div>
</template>

<script>
  import Vue from "vue";
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';

  export default Vue.extend({
    mixins: [getHTMLfromMDMixin],
    computed: {
      content: function () {
        return this.$route.meta.content;
      }
    },
    data() {
      return {
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
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

