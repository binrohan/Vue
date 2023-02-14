<template>
  <form @submit.prevent="submit">
    <div class="form-control">
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div class="form-control">
      <label>Age</label>
      <input type="text" v-model="age" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
  emits: {
    'set-user': function (name, age) {
      if (name === '' || age === 0) return false;
      return true;
    },
  },
  data() {
    return {
      name: this.username,
      age: this.userAge,
    };
  },
  methods: {
    submit() {
      this.$emit('set-user', this.name, +this.age);
    },
  },
};
</script>

<style>
.form-control {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
