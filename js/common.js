var vue = new Vue({
  el: '#app',
  data: {
    result: '',
    resultLive: '',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
    operations: ['+', '-', '*', '/', '^'],

  },
  methods: {
    input: function (par) {
      if (typeof (this.result) == "number" ) {
        this.result = this.result.toString();
      }
      this.result += par;
      // this.calcLive();
    },
    reset: function () {
      this.result = '';
      // this.resultLive = this.result;
    },
    calc: function () {
      if (eval(this.result) == Infinity) {
        this.deleteC();
        alert('Делить на ноль не безопасно!');
      }
      else {
        this.result = this.result.replace("^", "**");
        this.result = eval(this.result);
      }
    },
    deleteC: function () {
      this.result = this.result.toString();
      this.result = this.result.slice(0, -1);
      // this.resultLive = this.result;
    },
    // calcLive: function () {
    //   this.resultLive = eval(this.result.replace("^", "**"));
    // }
  }
})


