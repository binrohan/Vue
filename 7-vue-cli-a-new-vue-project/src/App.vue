<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'raju',
          name: 'Raju Hasan',
          phone: '0155489891',
          email: 'onk@olosh.com',
        },
        {
          id: 'shuvo',
          name: 'Shuvo Nandi',
          phone: '01554826656',
          email: 'snake@olosh.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>
