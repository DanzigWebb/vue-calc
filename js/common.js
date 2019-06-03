var vue = new Vue({
  el: '#app',
  data: {
    result: '',
    numbers: [1,2,3,4,5,6,7,8,9,0],
    operations: ['+', '-', '*', '/'],

  },
  methods:  {
    input: function(par) {
      this.result = this.result.toString();
      this.result+=par;
    },
    reset: function() {
      this.result = '';
    },
    calc: function() {
      this.result = eval(this.result);
    },
    deleteC: function () {
      this.result = this.result.toString();
      this.result = this.result.slice(0, -1);
    }
  }

})