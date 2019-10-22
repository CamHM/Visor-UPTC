<template>
    <v-container>
        <v-card>
            <v-chart :options="polar"></v-chart>
        </v-card>
    </v-container>
</template>

<script>
    import ECharts from 'vue-echarts'

    export default {
        name: "CardGraphic2",
        components: {
            'v-chart': ECharts
        },
        data: function () {
            let data = []

            for (let i = 0; i <= 360; i++) {
                let t = i / 180 * Math.PI
                let r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([r, i])
            }

            return {
                polar: {
                    title: {
                        text: 'Example'
                    },
                    legend: {
                        data: ['line']
                    },
                    polar: {
                        center: ['50%', '54%']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    angleAxis: {
                        type: 'value',
                        startAngle: 0
                    },
                    radiusAxis: {
                        min: 0
                    },
                    series: [
                        {
                            coordinateSystem: 'polar',
                            name: 'line',
                            type: 'line',
                            showSymbol: false,
                            data: data
                        }
                    ],
                    animationDuration: 2000
                }
            }
        }
    }
</script>

<style scoped>
    .echarts {
        height: 300px;
    }
</style>