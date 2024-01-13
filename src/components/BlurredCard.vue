<template>
  <div class="blurredCard" v-on:click="increase_counter($event)" v-on:dblclick="output()">
    <a :href="link" class="card_link flex">
      <div class="card-img flex">
        <img class="poster b-lazy" :data-src="src" src=""
             alt="poster" decoding="async" width="340" height="270">
      </div>
      <div class="text-label">
        <div>{{counter}} : {{changed_name}}</div>
        <div class="date">{{ date }}</div>
        <div class="titleWrapper flex">
          <span class="title textOverflow line-clamp-2">{{ title }}</span>
          <span class="icon">
            <svg class="arrow" width="20" height="20" role="img" aria-label="arrow"><use xlink:href="#arrow"/></svg>
          </span>
        </div>
      </div>
      <div class="blurred"></div>
      <span></span>
    </a>
  </div>
</template>

<script>
// import '../sass/temp-part/BlurredCard.sass';
export default {
  name: "BlurredCard",
  props: {
    content: Object
  },
  data() {
    return {
      title: this.content.title,
      src: this.content.src,
      date: this.content.date,
      link: this.content.link,
      counter: 0,
      name: 'ali'
    };
  },
  computed: {
    changed_name() {
      console.log('change name fired!');
      return this.name;
    }
  },
  methods: {
    increase_counter(e) {
      e.preventDefault()
      this.counter++;
    },
    change_name() {
      console.log('change name fired!');
      return 'sfsfd';
    },
    output() {
      console.log('output fired!');
      this.name = 'reza';
      return 'output fired!'
    }
  }
}
</script>

<!--<style lang="sass">-->
<!--@import '../sass/basics/variables.sass'-->
<!--@import '../sass/basics/predefined.sass'-->
<!--.blurredCard-->
<!--  overflow: hidden-->
<!--  border-radius: 4px-->
<!--  position: relative-->
<!--  box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.25)-->
<!--  &:hover-->
<!--    .blurred-->
<!--      opacity: 0-->
<!--      transition: opacity 300ms ease-out-->
<!--  a-->
<!--    width: 100%-->
<!--  .card-img-->
<!--    @include aspect(1.26, 1)-->
<!--    width: 100%-->
<!--  .text-label-->
<!--    position: absolute-->
<!--    inset: 0-->
<!--    z-index: 2-->
<!--    background: rgb(0, 0, 0, 0.48)-->
<!--    color: #fff-->
<!--    display: flex-->
<!--    flex-direction: column-->
<!--    justify-content: flex-end-->
<!--    padding: 25px 20px-->
<!--    row-gap: 5px-->
<!--  .blurred-->
<!--    position: absolute-->
<!--    z-index: 1-->
<!--    backdrop-filter: blur(8px)-->
<!--    inset: 0-->
<!--    transition: opacity 300ms ease-out-->
<!--  .date-->
<!--    font: 550 16px/normal $yekanBakh-->
<!--  .title-->
<!--    font: 700 18px/35px $yekanBakh-->
<!--  .icon-->
<!--    padding-right: 15px-->
<!--    border-right: 1px solid #fff-->
<!--    height: 18px-->
<!--    align-self: baseline-->
<!--    margin-right: auto-->
<!--    display: none-->
<!--    svg-->
<!--      vertical-align: baseline-->
<!--</style>-->