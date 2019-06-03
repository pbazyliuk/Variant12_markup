(() => {

    angular
        .module('app')
        .component('navigation', {
            controller: 'NavigationController',
            controllerAs: 'vm',
            templateUrl: 'app/side-bar/navigation/navigation.html'
        });
})();