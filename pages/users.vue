<template>
    <div>
        <h1>Обертка над  users</h1>
        <nuxt-child/>
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
    