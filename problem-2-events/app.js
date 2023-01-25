const app = Vue.createApp({
  data() {
    return {
      input: '',
      input2: '',
    };
  },
  methods: {
    showAlert() {
      alert('Hello ? Vue!');
    },
    setInput(e) {
      this.input = e.target.value;
    },
    setInput2(e) {
      this.input2 = e.target.value;
    },
  },
});

app.mount('#assignment');
