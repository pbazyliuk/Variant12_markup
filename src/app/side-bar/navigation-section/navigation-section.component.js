(() => {

    angular
        .module('app')
        .component('navigationSection', {
            controller: 'NavigationSectionController',
            controllerAs: 'vm',
            bindings: {
                sectionConfig: '='
            },
            templateUrl: 'app/side-bar/navigation-section/navigation-section.html'
        });
})();