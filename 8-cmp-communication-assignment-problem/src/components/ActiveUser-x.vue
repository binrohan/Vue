<template>
  <li>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </li>
</template>

<script>
export default {
  props: [
    {
      id: String,
      required: true,
    },
    {
      name: String,
      required: true,
    },
    {
      age: Number,
      required: true,
    },
  ],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
