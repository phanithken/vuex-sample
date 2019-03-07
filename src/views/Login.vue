<template>
    <figure>
        <form action="" @submit="login">
            <input v-model="$store.state.username" type="text" placeholder="username" />
            <input v-model="$store.state.password" type="password" placeholder="password" />
            <input type="submit" value="Login" />
        </form>
    </figure>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        
        login: function (event) {
            alert(`Username: ${this.$store.state.username}\nPassword: ${this.$store.state.password}`)
        }

    }
}
</script>

<style>

</style>
