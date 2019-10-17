<template>
    <v-content class="primary">
        <div class="content">
            <v-btn
                color="accent"
                top
                right
                fab
                v-on:click.prevent="goHome"
            >
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <br /><br/>
            <p class="white--text display-1 font-regular">Facultad {{ $route.params.id }}</p>
        </div>
    </v-content>
</template>

<script>
    export default {
        name: "Faculty",
        props: ['faculty'],
        methods: {
            goHome() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .content {
        padding: 15px;
    }
</style>
