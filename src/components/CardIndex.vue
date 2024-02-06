<template>
  <div class="flex imgWrapper position-rel indexArticle">
    <div class="imgContent content-center visible_on_hover">
      <div class="contentWrap">
        <div class="title">{{ content[0].title }}</div>
        <div class="text">{{ content[0].text }}</div>
        <a :href="content[0].link" class="watchAll">
          <button class="btn radius-50">
            <span class="btnCnt">مشاهده همه</span>
          </button>
        </a>
      </div>
    </div>
    <img class="b-lazy" :data-src="content[0].src" alt="articleImg" decoding="async" src="">
  </div>
</template>

<script>
export default {
  name: "CardIndex",
  data() {
    return {
      // i: this.content.length - 1
    }
  },
  props: {
    content: Array,
  },
  // inject: ['content'],
  // created() {
  //   console.log(this.content[0])
  // }
}
</script>