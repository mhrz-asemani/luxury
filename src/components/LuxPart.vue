<template>
  <div v-if="!device_mobile" class="partContainer part_container part-divider">
    <button type="button" @click="$emit('remove-part', id)">*</button>
    <div class="flex-between contents">
<!--      <card-index :content="content"></card-index>-->
      <card-index />
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
  emits: ['remove-part'],
  props: {
    // prop validation: a prop could be more informative.
    opt: {
      type: Object,
      required: false,   // if we miss passing the prop, it uses default value
      default: { rtl: true, margin: 5, items: 4 },
      validator: function (value) {     // in case validator returns false, it throws a console warning
        return typeof value === "boolean";
      }
    },
    content: {
      type: Array,
      required: true
    },
    cat: String,
    id: String
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