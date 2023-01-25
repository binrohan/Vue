const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finished the course and learn Vue 3',
      courseGoalB: '<h2>Master Vue and Build App</h2>',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) return this.courseGoalA;
      else return this.courseGoalB;
    },
  },
});

app.mount('#user-goal');
