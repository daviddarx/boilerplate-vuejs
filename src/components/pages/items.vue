
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h2>
      {{items.title}}
    </h2>

    <div
      v-html="getHTMLfromMD(items.content)"
    >
    </div>

    <div>
      <div
        v-for="item in list"
        :key="item.title"
        ref="item"
      >
        <router-link
          v-bind:to="'/items/'+item.uuid"
        >
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as items from '../../../content/items/items.json';
  import * as itemsList from '../../../content/items/items/*.json';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';

  delete itemsList.default;

  export default Vue.extend({
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        items: items,
        list: Object.values(itemsList),
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

