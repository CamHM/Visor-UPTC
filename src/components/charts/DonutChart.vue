<template>
    <apexchart :class="[fullsize ? 'chart' : 'shortChart']" :options="chartOptions" :series="series" type="pie"></apexchart>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "DonutChart",
        components: {
            apexchart: VueApexCharts
        },
        props: ['data', 'fullsize'],
        data: function () {
            return {
                series: this.data.series,
                chartOptions: {
                    labels: this.data.labels,
                    colors: ['#91FF29', '#295CFF', '#CC29FF', '#FFCC29', '#FF29C7', '#29C7FF'],
                    chart: {
                        dropShadow: {
                            enabled: true,
                            color: '#111',
                            top: -1,
                            left: 3,
                            blur: 3,
                            opacity: 0.2
                        }
                    },
                },
            }
        }
    }
</script>

<style scoped>
    .chart {
        width: 480px;
    }
    .shortChart {
        width: 230px;
    }
</style>
