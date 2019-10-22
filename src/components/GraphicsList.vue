<template>
    <v-container class="primary main">
        <v-row v-for="item in list" v-bind:key="item.info._id">
            <v-col>
                <CardIndicator v-bind:data="item" color="secondary" @move-card="changeCard($event)" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import CardIndicator from "./CardIndicator";
    export default {
        name: "GraphicsList",
        components: {CardIndicator},
        props: ['list'],
        data: () => ({
            press: 0
        }),
        methods: {
            changeCard(id) {
                this.$emit('move', id)
            }
        }
    }
</script>

<style scoped>
    .main {
        margin: 0;
        width: 90%;
        height: 75vh;
        overflow-y: auto;
    }
    .main::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    .main::-webkit-scrollbar-thumb {
        background-color: #29FFCC;
        border-radius: 5px;
    }
    .main::-webkit-scrollbar-thumb:active {
        background: #CC29FF;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
</style>
