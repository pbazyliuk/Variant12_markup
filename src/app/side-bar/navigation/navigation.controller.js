(() => {

    angular
        .module('app')
        .controller('NavigationController', NavigationController);

    function NavigationController(Constants) {
        const vm = this;

        vm.navSectionsConfig = Constants.navSectionsConfig;
    }
})();