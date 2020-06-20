<template>
  <section id="success">
    <h2 class="caption text-hide"></h2>
    <p class="text pos-a text-hide">
    </p>
    <div class="card pos-a">
      <p>
        {{ data.name }}，您好<br>
        Moulin Orange 將於<br>
        {{ data.date }} 送達<br>
        [{{ data.soap }}] 禮盒<br>
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
  }
}
</script>

<style lang="scss" scoped>

#success {

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
    p {
      padding-top: 38px;
    }
  }

}

</style>
