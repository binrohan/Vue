const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: '',
      taskIsShown: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskIsShown ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    add() {
      this.tasks.push(this.task);
      this.task = '';
    },
    toggle() {
      this.taskIsShown = !this.taskIsShown;
    },
  },
}).mount('#assignment');
