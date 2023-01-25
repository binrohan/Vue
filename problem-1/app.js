const app = Vue.createApp({
  data() {
    return {
      name: 'Rohan Bin Khokon',
      age: '28',
      imageURL: 'https://avatars.githubusercontent.com/u/55561739?s=96&v=4',
      randomNumber: 0,
    };
  },
  methods: {
    generateRandomNumber() {
      this.randomNumber = Math.random();
      return Math.random();
    },
  },
});

app.mount('#assignment');
