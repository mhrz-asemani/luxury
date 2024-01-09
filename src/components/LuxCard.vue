<template>
  <div class="card">
    <a :href="item.link" class="card_link flex-col">
      <div class="card-img flex mb-15">
        <img class="poster b-lazy" :data-src="item.src" src=""
             alt="poster" decoding="async" width="282" height="202">
      </div>
      <div class="card-body title mb-5">
        {{ item.title }}
      </div>
      <div class="card-footer date">
        {{ item.date }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "LuxCard",
  props: {
    item: Object,
  },
}
</script>