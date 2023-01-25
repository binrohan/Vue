const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  computed: {
    fullName() {
      if (!this.name || !this.lastName) return '';
      return this.name + ' ' + this.lastName;
    },
  },
  watch: {
    // name(value, oldValue) {
    //   this.fullName = value ? value + ' ' + this.lastName : '';
    // },
    // lastName(value, oldValue) {
    //   this.fullName = value ? this.name + ' ' + value : '';
    // },
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  methods: {
    outputFullName() {
      if (!this.name || !this.lastName) return '';
      return this.name + ' ' + this.lastName;
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
