<template>
    <v-container>
        <v-card :color="color">
            <div v-bind:class="[main ? 'mainCard' : 'card']">

            </div>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "CardIndicator",
        data: () => ({
            card:
                {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6}
        }),
        props: [
            'data',
            'color',
            'main'
        ]
    }
</script>

<style scoped>
    .card {
        width: 100% !important;
        height: 30vh !important;
    }
    .mainCard {
        width: 100% !important;
        height: 73vh !important;
    }

</style>
