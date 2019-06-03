(() => {

    angular
        .module('app')
        .controller('TotalStatisticsController', TotalStatisticsController);

    function TotalStatisticsController() {
        const vm = this;

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