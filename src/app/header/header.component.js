(() => {

    angular
        .module('app')
        .component('header', {
            controller: 'HeaderController',
            controllerAs: 'vm',
            templateUrl: 'app/header/header.html'
        });

})();