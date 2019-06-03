(() => {

    angular
        .module('app')
        .controller('AllUsersInfoController', AllUsersInfoController);

    function AllUsersInfoController(Constants) {
        const vm = this;
        vm.openTab = openTab;
        vm.onInit = onInit;
        vm.commentsConfig = Constants.commentsConfig;

        function onInit() {
            openTab(null, 'first');
        }

        function openTab(evt, number) {


            var i, tabcontent, tablinks;
            tabcontent = $(".tabcontent");

            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            tablinks = $(".tablinks");
            evt = evt || { currentTarget: tablinks[0] };
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            $('#' + number)[0].style.display = "block";
            evt.currentTarget.className += " active";


        }

        vm.onInit();
    }
})();