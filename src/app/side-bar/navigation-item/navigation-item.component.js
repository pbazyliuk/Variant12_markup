(() => {

    angular
        .module('app')
        .component('navigationItem', {
            controller: 'NavigationItemController',
            controllerAs: 'vm',
            bindings: {
                sectionItem: '='
            },
            templateUrl: 'app/side-bar/navigation-item/navigation-item.html'
        });
})();