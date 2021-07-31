var app = new Vue({
  el: '#app',
  data: {
    ActiveBtn: false
  },
  methods: {
    activeBtnClick: function (event) {
        app.$data.ActiveBtn = !app.$data.ActiveBtn
  }
}})


