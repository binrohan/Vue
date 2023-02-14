<template>
  <section class="container">
    <active-user :name="name" :age="age" />
    <user-data @set-user="setUser" :username="name" :userAge="age" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: 'Rohan',
      age: 27,
    };
  },
  methods: {
    setUser(name, age) {
      this.name = name;
      this.age = age;
    },
  },
};
</script>

<style></style>
