<template>
  <div>
    <h1>Пользователь с id {{ id }} и именем {{ user.name }}</h1>
    <h2>Пользователь с user_id {{ user_id }}</h2>

    <h3></h3>
  </div>
</template>
<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      user: null,
      user_id: null,
    };
  },
  async asyncData({ params }) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user = await response.json();
    console.log(user);

    const user_id = params.id;

    return {
      user,
      user_id,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  created() {
    alert("component is creatd");
  },
  mounted() {
    alert("this is last lifecycle of Nuxt");
  },
  asyncData() {
    alert('here we can make API')
  }
};
</script>
