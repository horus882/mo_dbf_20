<template>
  <section id="index">
    <h1 class="caption pos-a"><img v-bind:src="require('@/assets/index/caption.svg')" alt="賣皂"></h1>
    <div class="character pos-a"></div>
    <p class="text pos-a text-hide">
      Keep+0 Then Go Beyond<br>
      以趨吉避凶的艾草，全手工製造，能洗淨你的苦悶煩燥，讓美好的下半年如願來到
    </p>
    <div class="btns pos-a">
      <a href="#" class="btn-primary btn" v-on:click.prevent="changePage('index', 'choice')"><img v-bind:src="require('@/assets/index/btn.png')" width="109" alt="我要M+0賣皂"></a>
    </div>
  </section>
</template>

<script>

// import Vue from 'vue'

export default {
  name: 'Index',
  props: {
  },
  mounted() {
  },
  methods: {
    changePage(leavePage, enterPage) {
      this.$parent.changePage(leavePage, enterPage);
    }
  }
}
</script>

<style lang="scss" scoped>

#index {

  .caption {
    top: 30px;
    left: 60px;
    img { width: 178px; }
  }

  .character {
    top: 170px;
    left: -82px;
    width: 426px;
    height: 488px;
    background: url(../assets/index/character.png) 0 0 no-repeat;
    background-size: contain;
  }

  .text {
    top: 460px;
    left: 153px;
    width: 136px;
    height: 149px;
    background: url(../assets/index/text.png) 0 0 no-repeat;
    background-size: contain;
  }

  .btns {
    top: 638px;
  }

}

</style>
