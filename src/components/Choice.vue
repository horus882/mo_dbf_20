<template>
  <section id="choice" class="page-intro">
    <h2 class="caption text-hide">選擇 M+0 賣皂種類</h2>
    <p class="text pos-a text-hide elem elem-enter elem-leave">
      Keep+0勤洗手<br>
      讓下半年想要的都得心應手<br>
      來選擇你想要的M+0賣皂種類吧
    </p>
    <ul class="options">
      <li v-for="(item, index) in soaps" v-bind:key="index" v-bind:class="{'selected': soaps[index].selected}">
        <a v-on:click="chooseOption(index)" class="option pos-a text-hide elem elem-enter elem-leave" v-bind:class="'option-' + (index + 1)">item.name</a>
      </li>
    </ul>
    <p class="note pos-a elem elem-enter elem-leave">7/1前預訂截止</p>
    <div class="btns pos-a">
      <a href="#" class="btn-primary btn elem elem-enter elem-leave" v-bind:class="isDisabled()" v-on:click.prevent="changePage('choice', 'form')"><img v-bind:src="require('@/assets/choice/btn.png')" width="35" alt="確認"></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Choice',
  props: {
    soaps: Array,
    isSelected: Number
  },
  methods: {
    chooseOption(index) {
      this.$parent.chooseOption(index);
    },
    changePage(leavePage, enterPage) {
      if (this.isSelected == null) {
        alert('請選擇你想要的 M+0 賣皂種類');
        return false;
      }
      // var expiryDateString = '2020-06-30T16:00:00Z'; // 要減 8 小時
      // var expiryDate = new Date(expiryDateString);
      // var currentDate = new Date();
      // // alert(expiryDate + '\n' + currentDate);
      // if (currentDate >= expiryDate) {
      //   alert('抱歉，預訂已經截止囉');
      //   return false;
      // }
      this.$parent.changePage(leavePage, enterPage);
    },
    isDisabled() {
      if (this.isSelected == null) {
        return 'disabled';
      }
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
    transition-delay: .1s;
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
        transition-delay: .2s;
      }
      .option-2 {
        top: 204px;
        left: 163px;
        width: 118px;
        height: 102px;
        background-image: url(../assets/choice/option-2.png);
        transition-delay: .3s;
      }
      .option-3 {
        top: 326px;
        left: 41px;
        width: 114px;
        height: 99px;
        background-image: url(../assets/choice/option-3.png);
        transition-delay: .4s;
      }
      .option-4 {
        top: 333px;
        left: 168px;
        width: 106px;
        height: 92px;
        background-image: url(../assets/choice/option-4.png);
        transition-delay: .5s;
      }
      .option-5 {
        top: 445px;
        left: 40px;
        width: 114px;
        height: 114px;
        background-image: url(../assets/choice/option-5.png);
        transition-delay: .6s;
      }
      .option-6 {
        top: 454px;
        left: 174px;
        width: 94px;
        height: 94px;
        background-image: url(../assets/choice/option-6.png);
        transition-delay: .7s;
      }
    }
  }

  .note {
    top: 578px;
    width: 100%;
    color: #2e4974;
    font-size: 12px;
    text-align: center;
  }

  .btns {
    top: 614px;
    .btn {
      transition-delay: .8s;
    }
  }

}

</style>
