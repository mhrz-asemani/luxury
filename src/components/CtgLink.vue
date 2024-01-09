<template>
  <div class="categoryLink">
    <img class="b-lazy" :data-src="content[0].src" alt="articleLinkImg" decoding="async">
    <div class="flex content">
      <div class="catName">
        {{ content[0].title }}
      </div>
      <a :href="content[0].link" class="flex col-gap-10 mr-auto">
        <span class="text">مشاهده همه</span>
        <span class="icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtgLink",
  props: {
    content: Array,
  },
}
</script>