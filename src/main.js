import { createApp } from 'vue'
/*
 if imported component has dedicated style/or imported style in script, it transpiles to css and added to the head tag
   during compilation.
*/
// import './luxury.css'
import './luxury.js'

import BlurredCard from "./components/BlurredCard.vue";
import luxPart from "./components/LuxPart.vue";

const arrowIcon = '<svg class="arrow" width="24" height="24" role="img" aria-label="arrow"><use xlink:href="#arrow"/></svg>';

window.newArticle = createApp({
  components: {
    BlurredCard
  },
  data() {
    return {
      cardContent: {}
    }
  },
  methods: {
    updateCnt() {
      this.cardContent = data_json.newestArticles
    }
  }
});
newArticle.mount('#new_cards_wrap');

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
  methods: {
    updateCnt() {
      this.luxContent = data_json.luxuryCategories;
      // slice the object to get only 2 items
      this.luxContent = Object.fromEntries(
         Object.entries(this.luxContent).slice(0, 2)
      );
    }
  }
});
luxuryParts.mount('#luxParts');
