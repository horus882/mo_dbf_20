<template>
  <section id="success" class="page-intro">
    <h2 class="caption text-hide">預約成功</h2>
    <p class="text pos-a text-hide elem elem-enter elem-leave">我們已收到您的訂單！</p>
    <div class="card pos-a elem elem-enter elem-leave">
      <p>
        {{ data.name }}，您好<br>
        Moulin Orange 將於<br>
        {{ data.date }} 送達<br>
        [ M+0 {{ data.soap }}] 禮盒<br>
        祝您順心
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Success',
  props: {
    data: Object
  },
  methods: {
    changePage(leavePage, enterPage) {
      this.$parent.changePage(leavePage, enterPage);
    }
  }
}
</script>

<style lang="scss" scoped>

#success {

  perspective: 1000px;

  .text {
    top: 85px;
    left: 62px;
    width: 193px;
    height: 20px;
    background: url(../assets/success/text.png) 0 0 no-repeat;
    background-size: contain;
  }

  .card {
    top: 193px;
    left: 40px;
    width: 242px;
    height: 384px;
    color: #2e4974;
    font-size: 15px;
    line-height: 27px;
    text-align: center;
    background: url(../assets/success/card.png) 0 0 no-repeat;
    background-size: contain;
    transform: rotateX(0deg);
    transform-origin: center bottom;
    transition-delay: .2s;
    p {
      padding-top: 38px;
    }
  }

}

#success.page-intro {
  .card {
    transform: rotateX(100deg);
  }
}

</style>
