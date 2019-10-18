<template>
    <v-container>
        <v-hover v-slot:default="{ hover }">
            <v-card :color="color" :elevation="main ? 4 : (hover ? 16 : 2)" @click="$emit('move-card', Number(data.id))">
                <div v-bind:class="[main ? 'mainCard' : 'card']">
                    <p v-bind:class="[main ? 'danger--text headline font-weight-light general' : 'info--text caption font-weight-light general']">{{ data.title }}</p>
                </div>
            </v-card>
        </v-hover>
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
    .card:hover {
        cursor: pointer;
    }
    .general {
        padding: 7px;
    }
</style>
