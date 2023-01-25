const app = Vue.createApp({
  data() {
    return { goals: [], goal: '', myself: { name: 'Rohan', age: 35 } };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal);
      this.goal = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');
