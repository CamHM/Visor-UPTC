<template>
    <apexchart v-bind:class="[fullSize ? 'chart' : 'shortChart']" v-bind:type="[bar ? 'bar' : 'line']" :options="options" :series="series"></apexchart>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "BarLineChart",
        props: ['bar', 'data', 'fullSize'],
        components: {
            apexchart: VueApexCharts
        },
        data: function () {
            return {
                options: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: this.data.xaxis
                },
                series: this.data.series
            }
        }

    }
</script>

<style scoped>
    .chart {
        width: 600px;
    }
    .shortChart {
        width: 250px;
    }
</style>
