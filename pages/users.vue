<template>
    <div>
        <h1>Обертка над  users</h1>
        <nuxt-child word='hello' />
    </div>
</template>>

<script>
export default {
   middleware: ['checkAuth'],
   created() {
       this.$log()
   }
}
</script>
    