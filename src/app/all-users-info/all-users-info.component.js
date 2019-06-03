(() => {

    angular
        .module('app')
        .component('allUsersInfo', {
            controller: 'AllUsersInfoController',
            controllerAs: 'vm',
            templateUrl: 'app/all-users-info/all-users-info.html'
        });

})();