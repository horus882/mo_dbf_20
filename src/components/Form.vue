<template>
  <section id="form">
    <h2 class="caption text-hide">填寫表單</h2>
    <p class="text pos-a">
      [ M+0 {{ data.soap }} ]
    </p>
    <div class="panel pos-a">
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    </div>
    <div class="btns pos-a">
      <a href="#" class="btn-back btn-primary btn"><img v-bind:src="require('@/assets/form/btn-back.png')" width="70" alt="重新選擇"></a>
      <a href="#" class="btn-submit btn-primary btn"><img v-bind:src="require('@/assets/form/btn-submit.png')" width="69" alt="確認送出"></a>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueFormGenerator)

export default {
  name: 'Form',
  props: {
    data: Object
  },
  data() {
    return {
      model: {
        name: 'John Doe',
        mobile: '0912345678',
        email: 'john.doe@gmail.com',
        address: '台北市中山區農安街',
        date: ['7/14']
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: '姓名:',
            model: 'name',
            placeholder: '',
            // featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'tel',
            label: '手機:',
            model: 'mobile',
            min: 10,
            required: true,
            // hint: 'Minimum 6 characters',
            // validator: VueFormGenerator.validators.string
          },
          {
            type: 'input',
            inputType: 'email',
            label: 'E-mail:',
            model: 'email',
            required: true,
            // placeholder: 'User\'s e-mail address'
          },
          {
            type: 'input',
            inputType: 'text',
            label: '地址:',
            model: 'address',
            required: true,
            // validator: VueFormGenerator.validators.string
          },
          {
            type: 'select',
            label: '取貨時間:',
            model: 'date',
            required: true,
            values: ['7/14', '7/15', '7/16']
          }
          // https://jsfiddle.net/sjordan/r81k8240/
          // {
          //   type: 'input',
          //   inputType: 'date',
          //   label: 'Date',
          //   model: 'date',
          //   required: true,
          //   validator: VueFormGenerator.validators.date
          // }
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

#form {

  .text {
    top: 84px;
    left: 0;
    width: 100%;
    color: #2e4974;
    font-size: 20px;
    text-align: center;
    padding-top: 26px;
    background: url(../assets/form/text.png) center top no-repeat;
    background-size: 91px 15px;
  }

  .panel {
    top: 214px;
    left: 40px;
    width: 242px;
    height: 313px;
    background: url(../assets/form/panel.png) 0 0 no-repeat;
    background-size: contain;
  }

  .btns {
    top: 614px;
    .btn {
      min-width: 116px;
      margin: 0 3px;
    }
  }

}

</style>
