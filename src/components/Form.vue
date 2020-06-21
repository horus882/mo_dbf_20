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
      <a href="#" class="btn-back btn-primary btn" v-on:click.prevent="changePage('form', 'choice')"><img v-bind:src="require('@/assets/form/btn-back.png')" width="70" alt="重新選擇"></a>
      <a href="#" class="btn-submit btn-primary btn" v-on:click.prevent="submitForm"><img v-bind:src="require('@/assets/form/btn-submit.png')" width="69" alt="確認送出"></a>
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
