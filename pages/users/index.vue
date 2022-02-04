<template>
  <div>
    <h1>Пользователи</h1>
    <ol>
      <li v-for="(user, i) in users" :key="i">
        <nuxt-link :to="`users/${user.id}`">
            {{user.name}}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
export default {
  async fetch({store}) {
   //if you load data through the action from vuex
   console.log(store);
  },
  async asyncData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
      users
    }
  },
  data() {
    return {
      users: []
    }
  },
  computed: {
    // ...mapGetters({
    //   users: "users/getUsers",
    // }),
  },
  // async created () {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   this.users = await response.json()
  // }
};
</script>