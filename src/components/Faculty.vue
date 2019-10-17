<template>
    <v-content class="primary">
        <div class="content">
            <v-tooltip bottom>
                <template v-slot:activator="{on}">
                    <v-btn
                        color="accent secondary--text"
                        top
                        right
                        fab
                        v-on:click.prevent="goHome"
                        v-on="on"
                    >
                        <v-icon>mdi-home</v-icon>
                    </v-btn>
                </template>
                <span>Volver a facultades</span>
            </v-tooltip>
            <span class="title white--text display-1 font-regular">Facultad {{ $route.params.id }}</span>
            <br /><br/>
            <div class="main secondary success--text">
                Aquí van las gráficas, Sumercé!
            </div>
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
        padding: 20px;
    }
    .main {
        height: 80vh;
        width: 100vh;
        border-radius: 3px;
        margin-left: 5%;
        text-align: center;
    }
    .title {
        margin-left: 50px;
    }
</style>
