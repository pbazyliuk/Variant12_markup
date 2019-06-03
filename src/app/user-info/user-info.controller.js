(() => {

    angular
        .module('app')
        .controller('UserInfoController', UserInfoController);

    function UserInfoController(Constants) {
        const vm = this;

        vm.userInfoConfig = Constants.userInfoConfig;
        vm.toggleCollapseExpand = toggleCollapseExpand;

        function toggleCollapseExpand(event) {
            const currentTarget = event.currentTarget;
            const content = currentTarget.nextElementSibling;

            currentTarget.classList.toggle("rotate");

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        }
    }

})();