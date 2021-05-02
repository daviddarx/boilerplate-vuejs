
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h2>
      {{contact.title}}
    </h2>

    <div
      v-html="getHTMLfromMD(contact.content)"
    >
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as contact from '../../../content/contact/contact.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';

  export default Vue.extend({
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        contact: contact,
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

