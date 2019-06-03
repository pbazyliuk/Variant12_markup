(() => {

    angular
        .module('app')
        .component('users', {
            controller: 'UsersController',
            controllerAs: 'vm',
            templateUrl: 'app/users/users.html'
        });

})();