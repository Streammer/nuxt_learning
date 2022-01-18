<template>
  <h1>Пользователь с id {{ id }}</h1>
</template>
<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData ({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
      user
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      users: null
    }
  }
};
</script>
