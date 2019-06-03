(() => {

    angular
        .module('app')
        .component('comment', {
            controller: 'AllUsersInfoController',
            controllerAs: 'vm',
            bindings: {
                commentConfig: '='
            },
            templateUrl: 'app/comment/comment.html'
        });

})();