<template>
  <div class="flex imgWrapper position-rel indexArticle">
    <div class="imgContent content-center visible_on_hover">
      <div class="contentWrap">
        <div class="title">{{ content[i][0].title }}</div>
        <div class="text">{{ content[i][0].text }}</div>
        <a :href="content[i][0].link" class="watchAll">
          <button class="btn radius-50">
            <span class="btnCnt">مشاهده همه</span>
          </button>
        </a>
      </div>
    </div>
    <img class="b-lazy" :data-src="content[i][0].src" alt="articleImg" decoding="async" src="">
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "CardIndex",
  data() {
    return {
      i: this.content.length - 1
    }
  },
  // props: {
  //   content: Array,
  // },
  inject: ['content'],
  provide: {
    // i: computed(() => this.i)
  },
  mounted() {
    // console.log(this.content[0])
  }
}
</script>