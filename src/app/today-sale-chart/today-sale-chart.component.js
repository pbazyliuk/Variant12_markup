(() => {

    angular
        .module('app')
        .component('todaySaleChart', {
            controller: 'TodaySaleController',
            controllerAs: 'vm',
            templateUrl: 'app/today-sale-chart/today-sale-chart.html'
        });

})();