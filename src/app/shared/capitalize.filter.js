(() => {
    angular
        .module('app')
        .filter('capitalize', function () {
            return (input) => {
                return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1) : '';
            };
        })
})();

