(() => {
    angular
        .module('app')
        .controller('TodaySaleController', TodaySaleController);

    function TodaySaleController() {
        const vm = this;

        Highcharts.chart('today-sale', {
            chart: {
                type: 'area',
                backgroundColor: '#bec3c7'
            },
            title: {
                text: 'Today Sale'
            },
            xAxis: {
                visible: false
            },
            yAxis: {
                visible: false
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                split: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            series: [{
                name: 'Today',
                color: '#e84c3d',
                data: [20, 55, 40, 97, 47]
            }, {
                name: 'Yesterday',
                color: '#f1c40f',
                marker: {
                    fillColor: '#f704d2',
                    radius: 6
                },
                data: [30, 60, 70, 133, 34]
            }]
        });
    }
})();


//http://jsfiddle.net/7Lse3kw5/7/

//https://jsfiddle.net/jmzpuvgy/22/