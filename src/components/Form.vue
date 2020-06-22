<template>
  <section id="form" class="page-intro">
    <h2 class="caption text-hide">填寫表單</h2>
    <p class="text pos-a elem elem-enter elem-leave">
      [ M+0 {{ data.soap }} ]
    </p>
    <div class="panel pos-a elem elem-enter elem-leave">
      <transition name="fade">
        <div class="panel-form" v-if="!sending">
          <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
        </div>
      </transition>
      <transition name="fade">
        <div class="panel-loader" v-if="sending">
          <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10"/>
          </svg>
        </div>
      </transition>
    </div>
    <div class="btns pos-a">
      <a href="#" class="btn-back btn-primary btn elem elem-enter elem-leave" v-on:click.prevent="changePage('form', 'choice')"><img v-bind:src="require('@/assets/form/btn-back.png')" width="70" alt="重新選擇"></a>
      <a href="#" class="btn-submit btn-primary btn elem elem-enter elem-leave" v-on:click.prevent="submitForm"><img v-bind:src="require('@/assets/form/btn-submit.png')" width="69" alt="確認送出"></a>
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
    data: Object,
    sending: Boolean
  },
  data() {
    return {
      model: {
        // name: null,
        // mobile: null,
        // email: null,
        // address: null,
        // date: null
        name: 'Brent',
        mobile: '0912345678',
        email: 'brent@gmail.com',
        address: '台北市中山區農安街',
        date: '07/14'
      },
      schema: {
        fields: [
          {
            id: 'name',
            type: 'input',
            inputType: 'text',
            label: '姓名:',
            model: 'name',
            placeholder: '',
            // featured: true,
            required: true
          },
          {
            id: 'mobile',
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
            id: 'email',
            type: 'input',
            inputType: 'email',
            label: 'Mail:',
            model: 'email',
            required: true,
            // validator: VueFormGenerator.validators.email
            // placeholder: 'User\'s e-mail address'
          },
          {
            id: 'address',
            type: 'input',
            inputType: 'text',
            label: '地址:',
            model: 'address',
            required: true,
            validator: VueFormGenerator.validators.string
          },
          {
            id: 'date',
            type: 'select',
            label: '取貨時間:',
            model: 'date',
            required: true,
            selectOptions : { 
              hideNoneSelectedText: true,
            },
            values: ['07/14', '07/15', '07/16']
            // values: function() {
            //   return [
            //     { id: 0, name: "07/14" },
            //     { id: 1, name: "07/15" },
            //     { id: 2, name: "07/16" }
            //   ]
            // }
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
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  },
  methods: {
    submitForm() {
      // console.log(this.model);
      this.$parent.submitForm(this.model);
    },
    changePage(leavePage, enterPage) {
      this.$parent.changePage(leavePage, enterPage);
    }
  }
}
</script>

<style lang="scss">

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
    transition-delay: .1s;
  }

  .panel {
    top: 214px;
    left: 40px;
    width: 242px;
    height: 313px;
    padding: 53px 20px 0;
    background: url(../assets/form/panel.png) 0 0 no-repeat;
    background-size: contain;
    box-sizing: border-box;
    transition-delay: .2s;
    .form-group {
      display: table;
      height: 38px;
      color: #2e4974;
      font-size: 15px;
      border-radius: 19px;
      border: #e19228 1px solid;
      margin-bottom: 12px;
      > label, .field-wrap {
        display: table-cell;
        height: 100%;
        vertical-align: middle;
      }
      > label {
        width: 52px;
        padding-left: 15px;
      }
      .field-wrap {
        width: 151px;
        padding-right: 10px;
        .form-control {
          border: 0;
          box-shadow: none;
          background: none;
        }
      }
      &.required > label:after {content: none;}
      &:last-child {
        > label {width: 81px;}
        .field-wrap {width: 122px;}
      }
    }
    .panel-loader {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80px;
      margin: -40px 0 0 -40px;
      &::before {
        content: '';
        display: block;
        padding-top: 100%;
      }
    }
    .circular {
      animation: rotate 2s linear infinite;
      transform-origin: center center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: auto;
    }
    .path {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      animation: dash 1.5s ease-in-out infinite, form-loader-color 6s ease-in-out infinite;
      stroke-linecap: round;
    }

  }

  .btns {
    top: 614px;
    .btn {
      min-width: 116px;
      margin: 0 3px;
    }
    .btn-back {
      transition-delay: .3s;
    }
    .btn-submit {
      transition-delay: .4s;
    }
  }

}

</style>
