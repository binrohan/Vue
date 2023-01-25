const app = Vue.createApp({
  data() {
    return {
      sum: 0,
    };
  },
  computed: {
    result() {
      if (this.sum === 37) return '37';
      else if (this.sum > 37) return 'Too much!';
      else return 'Not there yet';
    },
  },
  watch: {
    result(value) {
      setTimeout(() => {
        this.sum = 0;
      }, 5000);
    },
  },
  methods: {
    add(num) {
      this.sum += num;
    },
  },
});

app.mount('#assignment');
