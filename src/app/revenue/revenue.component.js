(() => {

    angular
        .module('app')
        .component('revenue', {
            controller: 'RevenueController',
            controllerAs: 'vm',
            templateUrl: 'app/revenue/revenue.html'
        });

})();