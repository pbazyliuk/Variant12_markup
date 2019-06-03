(() => {

    angular
        .module('app')
        .component('dashboard', {
            controller: 'DashboardController',
            controllerAs: 'vm',
            templateUrl: 'app/dashboard/dashboard.html'
        });

})();