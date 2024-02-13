import { computed, createApp } from 'vue'
/*
 if imported component has dedicated style/or imported style in script, it transpiles to css and added to the head tag
   during compilation.
*/
// import './luxury.css'
import './luxury.js'

import BlurredCard from "./components/BlurredCard.vue";
import luxPart from "./components/LuxPart.vue";
import Card from "./components/Card.vue"

const arrowIcon = '<svg class="arrow" width="24" height="24" role="img" aria-label="arrow"><use xlink:href="#arrow"/></svg>';

window.newArticle = createApp({
  // components: {
  //   BlurredCard
  // },
  data() {
    return {
      cardContent: {}
    }
  },
  methods: {
    updateCnt() {
      this.cardContent = data_json.newestArticles;    // an array
    },
  }
});
// alternative way to register a component. use this way or the above way.
// component name(or tag name) should be written in kebab case.
newArticle.component('blurred-card', BlurredCard);
newArticle.mount('#new_cards_wrap');

// --------------------------------------------------------------------------------------------------
const staticCard = createApp({
  components: { Card },
});
staticCard.mount("#staticCards");

// --------------------------------------------------------------------------------------------------
window.luxuryParts = createApp({
  components: {
    luxPart
  },
  data() {
    return {
      luxContent: {},
      options: {
        rtl: true,
        margin: 10,
        nav: true,
        navText: [arrowIcon, arrowIcon],
        dots: false,
        items: 3,
        smartSpeed: 600,
      }
    }
  },
  watch: {
    // content(next, prev) {
    //   console.log(prev, next)
    // }
  },
  // provide() {
  //   return {
      /* In order to make injections reactively linked to the provider, we need to provide a computed property.
        using computed property this way, we need to import computed from vue.
      */
  //     content: computed(() => Object.values(this.luxContent))
  //   }
  // },
  methods: {
    updateCnt() {
      this.luxContent = data_json.luxuryCategories;    // an object
      // slice the object to get some items
      this.luxContent = Object.fromEntries(
        Object.entries(this.luxContent).slice(0, 4)
      );
    },
    removePart(partId) {
      delete this.luxContent[partId];
    }
  }
});
luxuryParts.mount('#luxParts');