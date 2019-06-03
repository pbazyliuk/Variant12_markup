(() => {

    angular
        .module('app')
        .controller('BreadCrumbsController', BreadCrumbsController);

    function BreadCrumbsController($state, $transitions) {
        const vm = this;

        vm.childUrl = $state.current;

        $transitions.onSuccess({}, function () {
            vm.childUrl = $state.current;
        });
    }

})();