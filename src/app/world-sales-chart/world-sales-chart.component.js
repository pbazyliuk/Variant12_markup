(() => {

    angular
        .module('app')
        .component('worldSalesChart', {
            controller: 'WorldSalesChartController',
            controllerAs: 'vm',
            templateUrl: 'app/world-sales-chart/world-sales-chart.html'
        });

})();