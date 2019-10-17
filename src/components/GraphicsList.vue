<template>
    <v-container>
        <v-card v-for="card in cards"
                :key="card.title"
                :cols="card.flex" class="ma-1">
            <v-img
                    :src="card.src"
                    class="white--text align-start"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
            >
                <v-card-title v-text="card.title"></v-card-title>
            </v-img>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "GraphicsList",
        data: () => ({
            cards: [
                {title: 'Número de proyectos de investigación según financiación', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12},
                {title: 'Inversión en I+D a nivel de proyectos', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
                {title: 'Inversión en I+D por tipo de entidad', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6},
            ],
        })
    }
</script>

<style scoped>

</style>