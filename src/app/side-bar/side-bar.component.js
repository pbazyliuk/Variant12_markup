(() => {

    angular
        .module('app')
        .component('sideBar', {
            controller: 'SideBarController',
            controllerAs: 'vm',
            templateUrl: 'app/side-bar/side-bar.html'
        });

})();