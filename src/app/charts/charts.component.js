(() => {

    angular
        .module('app')
        .component('charts', {
            controller: 'ChartsController',
            controllerAs: 'vm',
            templateUrl: 'app/charts/charts.html'
        });

})();