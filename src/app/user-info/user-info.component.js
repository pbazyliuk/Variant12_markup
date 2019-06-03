(() => {

    angular
        .module('app')
        .component('userInfo', {
            controller: 'UserInfoController',
            controllerAs: 'vm',
            templateUrl: 'app/user-info/user-info.html'
        });

})();