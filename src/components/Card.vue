<template>
  <div class="card">
    <a href="/" class="card_link flex-col">
      <div class="card-img flex mb-15">
        <slot name="img"></slot>
      </div>
      <div class="card-body title mb-5">
        <slot name="title"></slot>
      </div>
      <div class="card-footer date">
        <slot name="date"></slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>