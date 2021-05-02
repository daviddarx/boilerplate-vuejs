
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
    <div>
      <router-link
        v-bind:to="this.linkPrev.path"
      >
        {{this.linkPrev.title}}
      </router-link>
      <router-link
        v-bind:to="this.linkNext.path"
      >
        {{this.linkNext.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';
  import * as itemsList from '../../../content/items/items/*.json';

  delete itemsList.default;

  export default Vue.extend({
    mixins: [getHTMLfromMDMixin],
    computed: {
      content: function () {
        return this.$route.meta.content;
      },
      id: function () {
        return this.$route.meta.id;
      },
      linkNext: function () {
        const id = (this.id < this.itemsList.length - 1 ) ? this.id + 1: 0;

        return {
          path: '/items/'+this.itemsList[id].uuid,
          title: this.itemsList[id].title
        }
      },
      linkPrev: function () {
        const id = (this.id == 0 ) ? this.itemsList.length - 1 : this.id - 1 ;

        return {
          path: '/items/'+this.itemsList[id].uuid,
          title: this.itemsList[id].title
        }
      }
    },
    data() {
      return {
        itemsList: Object.values(itemsList),
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);

      console.log(this.id);
      console.log(this.itemsList);
      console.log(this.linkNext);
      console.log(this.linkPrev);
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

