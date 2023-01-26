const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01553501368',
          email: 'binrohan.cs@gmail.com',
        },
        {
          id: 'cr7',
          name: 'Cristiano Ronaldo',
          phone: '01777547348',
          email: 'binrohan97@gmail.com',
        },
      ],
    };
  },
  methods: {},
});

app.component('friend-contact', {
  props: ['friend'],
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggle">
        {{detailsIsVisible ? 'Hide' : 'Show'}} Details
    </button>
    <ul v-if="detailsIsVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsIsVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01553501368',
        email: 'binrohan.cs@gmail.com',
      },
    };
  },
  methods: {
    toggle() {
      this.detailsIsVisible = !this.detailsIsVisible;
    },
  },
});

app.mount('#app');
