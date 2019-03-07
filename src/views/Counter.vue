<template>
    <figure>
        <button @click="decrement">-</button>
        <span>{{ $store.state.count }}</span>
        <button @click="increment">+</button>
    </figure>
</template>

<script>
export default {
    name: 'Counter',
    methods: {

        // component method handling increment store dispatch action
        increment: function (event) {
            this.$store.dispatch('increment')
        },

        // component method handing decrement store dispatch action
        decrement: function (event) {
            this.$store.dispatch('decrement')
        }

    }
}
</script>

<style>
    span {
        padding: 0 10px;
    }
</style>
