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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      users: "users/getUsers",
    }),
  },
};
</script>