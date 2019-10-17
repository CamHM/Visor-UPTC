<template>
    <v-container>
        <v-card>
            <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="550px"
            >
                <v-card-title v-text="data"></v-card-title>
            </v-img>
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
            'data'
        ]
    }
</script>

<style scoped>

</style>