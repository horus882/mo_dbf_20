<template>
  <section id="choice">
    <h2 class="caption text-hide">選擇 M+0 賣皂種類</h2>
    <p class="text pos-a text-hide">
      Keep+0勤洗手<br>
      讓下半年想要的都得心應手<br>
      來選擇你想要的M+0賣皂種類吧
    </p>
    <ul class="options">
      <li v-bind:class="{'selected': options[0]}"><a v-on:click="chooseOption(0)" class="option-1 option pos-a text-hide">M+0 知心的朋友賣皂</a></li>
      <li v-bind:class="{'selected': options[1]}"><a v-on:click="chooseOption(1)" class="option-2 option pos-a text-hide">M+0 賺來的新台幣賣皂</a></li>
      <li v-bind:class="{'selected': options[2]}"><a v-on:click="chooseOption(2)" class="option-3 option pos-a text-hide">M+0 未婚的愛人賣皂</a></li>
      <li v-bind:class="{'selected': options[3]}"><a v-on:click="chooseOption(3)" class="option-4 option pos-a text-hide">M+0 練好的腹肌賣皂</a></li>
      <li v-bind:class="{'selected': options[4]}"><a v-on:click="chooseOption(4)" class="option-5 option pos-a text-hide">M+0 沒放的年假賣皂</a></li>
      <li v-bind:class="{'selected': options[5]}"><a v-on:click="chooseOption(5)" class="option-6 option pos-a text-hide">M+0 說好的加薪賣皂</a></li>
    </ul>
    <div class="btns pos-a">
      <a href="#" class="btn-primary btn"><img v-bind:src="require('@/assets/choice/btn.png')" width="35" alt="確認"></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Choice',
  props: {
    options: Array
  },
  methods: {
    chooseOption(index) {
      this.$parent.chooseOption(index);
    }
  }
}
</script>

<style lang="scss" scoped>

#choice {

  .text {
    top: 85px;
    left: 55px;
    width: 212px;
    height: 61px;
    background: url(../assets/choice/text.png) 0 0 no-repeat;
    background-size: contain;
  }

  .options {
    li {
      .option {
        background-position: left top;
        background-repeat: no-repeat;
        background-size: 100% auto;
      }
      &.selected .option {
        background-position: left bottom;
      }
      .option-1 {
        top: 200px;
        left: 42px;
        width: 112px;
        height: 112px;
        background-image: url(../assets/choice/option-1.png);
      }
      .option-2 {
        top: 204px;
        left: 163px;
        width: 118px;
        height: 102px;
        background-image: url(../assets/choice/option-2.png);
      }
      .option-3 {
        top: 326px;
        left: 41px;
        width: 114px;
        height: 99px;
        background-image: url(../assets/choice/option-3.png);
      }
      .option-4 {
        top: 333px;
        left: 168px;
        width: 106px;
        height: 92px;
        background-image: url(../assets/choice/option-4.png);
      }
      .option-5 {
        top: 445px;
        left: 40px;
        width: 114px;
        height: 114px;
        background-image: url(../assets/choice/option-5.png);
      }
      .option-6 {
        top: 454px;
        left: 174px;
        width: 94px;
        height: 94px;
        background-image: url(../assets/choice/option-6.png);
      }
    }
  }

  .btns {
    top: 614px;
  }

}

</style>
