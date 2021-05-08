<script>
import { Bar } from "vue-chartjs";

export default {
    extends: Bar,
    name: "chart",
    props: ["isRender"],
    data() {
        return {
            data: {
                labels: ["HTML", "CSS/Sass", "Javascript", "jQuery", "Vue.js", "ASP.NET MVC5", "Java", "PHP", "VB.NET"],
                datasets: [
                    {
                        axis: "y",
                        label: "熟練度",
                        data: [80, 80, 60, 40, 50, 50, 20, 10, 90],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                indexAxis: "y",
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 100,
                            },
                        },
                    ],
                },
            },
        };
    },
    watch: {
        isRender(newValue) {
            // console.log("isRenderが" + oldValue + "から" + newValue + "に変更されました");
            if (newValue) {
                this.renderChart(this.data, this.options);
            }
        },
    },
};
</script>

<style lang="scss">
#bar-chart {
    width: 100% !important;
    height: 100% !important;
}
</style>
