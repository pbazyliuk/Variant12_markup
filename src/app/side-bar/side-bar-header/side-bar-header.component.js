(() => {

    angular
        .module('app')
        .component('sideBarHeader', {
            controller: 'SideBarHeaderController',
            controllerAs: 'vm',
            templateUrl: 'app/side-bar/side-bar-header/side-bar-header.html'
        });

})();