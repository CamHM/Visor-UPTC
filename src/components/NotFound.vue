<template>
    <v-content>
        <p class="primary">
            404 Not Found.
        </p>
        <p>
            Parece que la página que estás tratando de acceder no se encuentra disponible.
        </p>

    </v-content>
</template>

<script>
    export default {
        name: "NotFound",
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>
