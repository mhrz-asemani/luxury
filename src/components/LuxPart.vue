<script>
import LuxCard from './LuxCard.vue';
import CardIndex from "./CardIndex.vue";
import CtgLink from "./CtgLink.vue";

export default {
  name: "LuxPart",
  components: {
    CardIndex,
    LuxCard,
    CtgLink,
  },
  props: {
    opt: Object,
    content: Array,
    cat: String,
  },
  mounted() {
    jQuery(this.$refs.catSlider).owlCarousel(this.$props.opt)
      .find('.owl-nav').addClass(`sliderNavBtn rect`);
  },
  computed: {
    device_mobile() {
      return jQuery('body.device_mobile').length;
    }
  }
}
</script>

<template>
  <div v-if="!device_mobile" class="partContainer part_container part-divider">
    <div class="flex-between contents">
      <card-index :content="content"></card-index>
      <div class="part-slider">
        <div class="sliderWrapper owl-carousel owl-theme" :data-category="cat" ref="catSlider">
          <lux-card v-for="(value, idx) in content.slice(1)" :item="value" :key="idx"></lux-card>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="categorySlider part_container">
    <div class="container-32">
      <ctg-link :content="content"></ctg-link>
    </div>
    <div class="simpleSlider hide-scrollbar lazyLoad">
      <div class="sliderWrapper flex" data-category="cat">
        <lux-card v-for="(item, idx) in content.slice(1)" :item="item" :idx="idx"></lux-card>
      </div>
    </div>
  </div>
</template>