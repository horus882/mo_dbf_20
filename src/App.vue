<template>
  <div id="app">
    <div id="main">
      <transition name="fade">
        <Index  v-show="show.index" />
      </transition>
      <transition name="fade">
        <Choice v-show="show.choice" :soaps="soaps" />
      </transition>
      <transition name="fade">
        <Form v-show="show.form" :data="form" />
      </transition>
      <transition name="fade">
        <Success v-show="show.success" :data="form" />
      </transition>
      <div id="brand" class="pos-a">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1172.26 182.45" style="enable-background:new 0 0 1172.26 182.45;">
          <path d="M116.42,82.77c-0.96-18.07-2.11-39.79-1.92-55.93h-0.58c-4.42,15.18-9.8,31.33-16.34,49.2l-22.87,62.85H62.03 L41.08,77.2c-6.15-18.26-11.34-34.98-14.99-50.36H25.7c-0.38,16.15-1.35,37.86-2.5,57.28l-3.46,55.55H3.79l9.03-129.54h21.33 l22.1,62.66c5.38,15.95,9.8,30.18,13.07,43.63h0.58c3.27-13.07,7.88-27.29,13.65-43.63l23.06-62.66h21.33l8.07,129.54h-16.34 L116.42,82.77z"/>
          <path d="M244.99,92.38c0,34.4-23.83,49.4-46.32,49.4c-25.18,0-44.59-18.45-44.59-47.86c0-31.14,20.37-49.4,46.13-49.4 C226.93,44.53,244.99,63.94,244.99,92.38z M171.19,93.34c0,20.37,11.72,35.75,28.25,35.75c16.15,0,28.25-15.18,28.25-36.13 c0-15.76-7.88-35.75-27.87-35.75C179.84,57.21,171.19,75.66,171.19,93.34z"/>
          <path d="M342.63,114.29c0,9.61,0.19,18.07,0.77,25.37h-14.99l-0.96-15.18h-0.38c-4.42,7.5-14.22,17.3-30.75,17.3 c-14.61,0-32.1-8.07-32.1-40.75V46.64h16.91v51.51c0,17.68,5.38,29.6,20.76,29.6c11.34,0,19.22-7.88,22.3-15.38 c0.96-2.5,1.54-5.57,1.54-8.65V46.64h16.91V114.29z"/>
          <path d="M369.15,3.2h16.91v136.46h-16.91V3.2z"/>
          <path d="M431.81,20.5c0.19,5.77-4.04,10.38-10.76,10.38c-5.96,0-10.19-4.61-10.19-10.38c0-5.96,4.42-10.57,10.57-10.57 C427.77,9.93,431.81,14.54,431.81,20.5z M412.97,139.66V46.64h16.91v93.02H412.97z"/>
          <path d="M456.41,71.82c0-9.61-0.19-17.49-0.77-25.18h14.99l0.96,15.38h0.38c4.61-8.84,15.38-17.49,30.75-17.49 c12.88,0,32.87,7.69,32.87,39.59v55.55h-16.91V86.04c0-14.99-5.57-27.48-21.53-27.48c-11.15,0-19.8,7.88-22.68,17.3 c-0.77,2.11-1.15,5-1.15,7.88v55.93h-16.91V71.82z"/>
          <path d="M712.03,73.55c0,44.59-27.1,68.23-60.16,68.23c-34.21,0-58.24-26.52-58.24-65.73 c0-41.13,25.56-68.04,60.16-68.04C689.16,8.01,712.03,35.11,712.03,73.55z M611.51,75.66c0,27.68,14.99,52.47,41.32,52.47 c26.52,0,41.52-24.41,41.52-53.82c0-25.75-13.45-52.66-41.32-52.66C625.34,21.65,611.51,47.22,611.51,75.66z"/>
          <path d="M731.63,75.66c0-10.96-0.19-20.37-0.77-29.02h14.8l0.58,18.26H747c4.23-12.49,14.42-20.37,25.75-20.37 c1.92,0,3.27,0.19,4.8,0.58v15.95c-1.73-0.38-3.46-0.58-5.77-0.58c-11.92,0-20.37,9.03-22.68,21.72c-0.38,2.31-0.77,5-0.77,7.88 v49.59h-16.72V75.66z"/>
          <path d="M843.49,139.66l-1.34-11.72h-0.58c-5.19,7.3-15.18,13.84-28.45,13.84c-18.84,0-28.45-13.26-28.45-26.72 c0-22.49,19.99-34.79,55.93-34.6v-1.92c0-7.69-2.11-21.53-21.14-21.53c-8.65,0-17.68,2.69-24.22,6.92l-3.84-11.15 c7.69-5,18.84-8.26,30.56-8.26c28.45,0,35.37,19.41,35.37,38.06v34.79c0,8.07,0.38,15.95,1.54,22.3H843.49z M840.99,92.19 c-18.45-0.38-39.4,2.88-39.4,20.95c0,10.96,7.3,16.14,15.95,16.14c12.11,0,19.8-7.69,22.49-15.57c0.58-1.73,0.96-3.65,0.96-5.38 V92.19z"/>
          <path d="M883.08,71.82c0-9.61-0.19-17.49-0.77-25.18h14.99l0.96,15.38h0.38c4.61-8.84,15.38-17.49,30.75-17.49 c12.88,0,32.87,7.69,32.87,39.59v55.55h-16.91V86.04c0-14.99-5.57-27.48-21.53-27.48c-11.15,0-19.8,7.88-22.68,17.3 c-0.77,2.11-1.15,5-1.15,7.88v55.93h-16.91V71.82z"/>
          <path d="M1068.36,46.64c-0.38,6.73-0.77,14.22-0.77,25.56v54.01c0,21.33-4.23,34.4-13.26,42.48 c-9.03,8.46-22.1,11.15-33.83,11.15c-11.15,0-23.45-2.69-30.94-7.69l4.23-12.88c6.15,3.84,15.76,7.3,27.29,7.3 c17.3,0,29.98-9.03,29.98-32.48v-10.38h-0.38c-5.19,8.65-15.18,15.57-29.6,15.57c-23.06,0-39.59-19.6-39.59-45.36 c0-31.52,20.57-49.4,41.9-49.4c16.15,0,24.99,8.46,29.02,16.14h0.38l0.77-14.03H1068.36z M1050.87,83.35c0-2.88-0.19-5.38-0.96-7.69 c-3.08-9.8-11.34-17.87-23.64-17.87c-16.14,0-27.68,13.65-27.68,35.17c0,18.26,9.23,33.44,27.49,33.44c10.38,0,19.8-6.53,23.45-17.3 c0.96-2.88,1.34-6.15,1.34-9.03V83.35z"/>
          <path d="M1103.53,96.23c0.38,22.87,14.99,32.29,31.91,32.29c12.11,0,19.41-2.11,25.75-4.81l2.88,12.11 c-5.96,2.69-16.14,5.77-30.94,5.77c-28.64,0-45.74-18.84-45.74-46.9s16.53-50.16,43.63-50.16c30.37,0,38.44,26.72,38.44,43.82 c0,3.46-0.38,6.15-0.58,7.88H1103.53z M1153.12,84.12c0.19-10.76-4.42-27.48-23.45-27.48c-17.11,0-24.6,15.76-25.95,27.48H1153.12z" />
        </svg>
      </div>
      <div class="background">
        <div class="for-index"></div>
        <div class="for-choice"></div>
        <div class="for-form"></div>
        <div class="for-success"></div>
      </div>
    </div>
    <div id="loading" v-show="show.loading">
      <div class="loader">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

import Index   from './components/Index'
import Choice  from './components/Choice'
import Form    from './components/Form'
import Success from './components/Success'

import 'reset-css'

import Vue from 'vue'

export default {
  name: 'App',
  components: {
    Index, Choice, Form, Success
  },
  data() {
    return {
      checkFormat: {
        mobile: /^[09]{2}[0-9]{8}$/,
        email:  /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      },
      show: {
        loading:  true,
        index:    false,
        choice:   false,
        form:     false,
        success:  false
      },
      soaps: [ { name: '知心的朋友賣皂', selected: false }, { name: '賺來的新台幣賣皂', selected: false }, { name: '未婚的愛人賣皂', selected: false }, { name: '練好的腹肌賣皂', selected: false }, { name: '沒放的年假賣皂', selected: false }, { name: '說好的加薪賣皂', selected: false } ],
      form: {
        option:   null,
        soap:     null,
        name:     null,
        mobile:   null,
        email:    null,
        address:  null,
        date:     null
      }
    }
  },
  created() {
  },
  mounted() {
    window.onload = () => {
      setTimeout(() => {
        this.changePage('loading', 'index');
      }, 3000);
    }
    // Moulin Orange 動畫
    Vue.$animeJS({
      targets: '#brand path',
      strokeDashoffset: [Vue.$animeJS.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 2250,
      delay: function(el, i) { return (i + 1) * 125 },
      complete: function() {  }
    });
  },
  methods: {
    changePage(leavePage, enterPage) {
      this.show[leavePage] = false;
      this.show[enterPage] = true;
    },
    chooseOption(index) {
      for (var i = 0; i < this.soaps.length; i++) { this.soaps[i].selected = false; }
      this.soaps[index].selected = true;
      this.form.soap = this.soaps[index].name;
      this.form.option = index;
    },
    submitForm(model) {
      this.form.name    = model.name;
      this.form.mobile  = model.mobile;
      this.form.email   = model.email;
      this.form.address = model.address;
      this.form.date    = model.date;
      if (this.form.name == null) {
        alert('請填寫姓名');
        return false;
      } else if (this.form.mobile == null) {
        alert('請填寫手機');
        return false;
      } else if (!this.checkFormat.mobile.test(this.form.mobile)) {
        alert('請填寫正確的手機號碼格式');
        return false;
      } else if (this.form.email == null) {
        alert('請填寫 Mail');
        return false;
      } else if (!this.checkFormat.email.test(this.form.email)) {
        alert('請填寫正確的 Mail 格式');
        return false;
      } else if (this.form.address == null) {
        alert('請填寫地址');
        return false;
      } else if (this.form.date == null) {
        alert('請填寫取貨時間');
        return false;
      }
      console.log(this.form);
      this.changePage('form', 'success');
    }
  }
}

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');

body {
  background: #fcf6e8;
}

a, a:hover {
  color: #000;
  cursor: pointer;
  text-decoration: none;
}

#app {
  color: #000;
  font-size: 16px;
  font-family: 'Lato', 'sourcehansans-tc', 'Noto Sans S Chinese', 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', Tahoma, Verdana, Arial, Helvetica, sans-serif;
  font-weight: 400;
  padding: 60px 0 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}

#main {

  position: relative;
  width: 318px;
  height: 720px;
  margin: 0 auto;
  border-radius: 20px;

  > section {

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // position: relative;
    min-height: 720px;
    z-index: 2;

  }

  > #brand {
    position: absolute;
    top: -42px;
    left: -28px;
    width: 373px;
    path {
      fill:none;
      stroke:#FE6669;
      stroke-miterlimit:10;
    }
  }

  > .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 318px;
    height: 720px;
    background: #f9c12d;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .for-index {
    }
  }

}

.btns {
  font-size: 0;
  text-align: center;
  &.pos-a {
    width: 100%;
  }
}

.btn {
  position: relative;
  display: inline-block;
  min-width: 140px;
  height: 45px;
  padding: 0 15px;
  vertical-align: top;
  border-radius: 45px;
  box-sizing: border-box;
  background-color: #fff;
  > img {
    margin-top: 14.5px;
  }
}

.btn-primary {
  background-color: #fe546e;
}

.pos-a {
  position: absolute;
}

.text-hide {
  font-size: 0;
  text-indent: -5000px;
}

#loading {
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  background: #fcf6e8;
	// backdrop-filter: blur(3px);
	z-index: 99;
  .loader {
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
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }
}

@keyframes rotate {
	100% {
    transform: rotate(360deg);
	}
}

@keyframes dash {
	0% {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -35px;
	}
	100% {
		stroke-dasharray: 89, 200;
		stroke-dashoffset: -124px;
	}
}

@keyframes color {
	100%,
	0% {
		stroke: #f05665;
	}
	33% {
		stroke: #2d4873;
	}
  66% {
    stroke: #fac529;
  }
}

.fade-enter-active, 
.fade-leave-active {
  transition: .75s opacity;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}

</style>
