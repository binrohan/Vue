const app = Vue.createApp({
  data() {
    return {
      color: '',
      className: '',
      isHidden: false,
    };
  },
  computed: {
    paragraphClass() {
      return {
        hidden: this.isHidden,
        visible: !this.isHidden,
        user1: this.className === 'user1',
        user2: this.className === 'user2',
      };
    },
  },
  methods: {
    toggle() {
      this.isHidden = !this.isHidden;
    },
  },
});

app.mount('#assignment');
