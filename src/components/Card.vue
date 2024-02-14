<template>
  <div class="card">
    <a href="/" class="card_link flex-col">
      <div class="card-img flex mb-15">
        <slot name="img"></slot>
      </div>
      <div class="card-body title mb-5">
        <slot name="title"></slot>
      </div>
      <div class="card-footer date" v-if="$slots.date" v-for="goal in goals" :key="goal.id">
        <slot name="date" :item="goal.date" publish-date="تاریخ انتشار"></slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        { id: 1, date: "2021-05-01" },
        { id: 2, date: "2021-05-02" }
      ],
    };
  },
  name: "Card",
  mounted() {
    // console.log(this.$slots.date);   // it shows undefined if we don't provide any template for slot[date] in parent.
  }
}
</script>

/*
  why we used v-if="$slots.date" in card-footer?
  By default, if we don't provide any template for slot[date] in parent, then it will show empty card-footer in the card.
  to avoid that, we used v-if="$slots.date" in card-footer.
*/