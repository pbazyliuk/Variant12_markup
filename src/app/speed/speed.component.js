(() => {

    angular
        .module('app')
        .component('speed', {
            controller: 'SpeedController',
            controllerAs: 'vm',
            templateUrl: 'app/speed/speed.html'
        });

})();