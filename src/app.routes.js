// app.routes.js
(() => {

    angular.module('app')

        .config(($stateProvider, $urlRouterProvider) => {
            const states = [
                {
                    name: 'dashboard',
                    url: '/home/dashboard',
                    template: '<dashboard></dashboard>',
                    activeTab: 'dashboard'
                },
                {
                    name: 'emails',
                    url: '/home/emails',
                    template: '<emails></emails>',
                    activeTab: 'emails'
                },
                {
                    name: 'calendar',
                    url: '/home/calendar',
                    template: '<calendar></calendar>',
                    activeTab: 'calendar'
                },
                {
                    name: 'pages',
                    url: '/home/pages',
                    template: '<pages></pages>',
                    activeTab: 'pages'
                },
                {
                    name: 'charts',
                    url: '/home/charts',
                    template: '<charts></charts>',
                    activeTab: 'charts'
                },
                {
                    name: 'articles',
                    url: '/home/articles',
                    template: '<articles></articles>',
                    activeTab: 'articles'
                },
                {
                    name: 'users',
                    url: '/home/users',
                    template: '<users></users>',
                    activeTab: 'users'
                },
                {
                    name: 'favorites',
                    url: '/home/favorites',
                    template: '<favorites></favorites>',
                    activeTab: 'favorites'
                },
                {
                    name: 'speed',
                    url: '/home/speed',
                    template: '<speed></speed>',
                    activeTab: 'speed'
                },
                {
                    name: 'settings',
                    url: '/home/settings',
                    template: '<settings></settings>',
                    activeTab: 'settings'
                },
                {
                    name: 'revenue',
                    url: '/home/revenue',
                    template: '<revenue></revenue>',
                    activeTab: 'revenue'
                },
                {
                    name: 'pictures',
                    url: '/home/pictures',
                    template: '<pictures></pictures>',
                    activeTab: 'pictures'
                },
                {
                    name: 'FAQs',
                    url: '/home/fags',
                    template: '<faqs></faqs>',
                    activeTab: 'fags'
                },
                // {
                //     name: 'learning-process',
                //     url: '/learning-process',
                //     template: '<learning-process></learning-process>',
                //     activeTab: 'learning-process'
                // },
                // {
                //     name: 'specialties',
                //     url: '/learning-process/specialties',
                //     template: '<specialties></specialties>',
                //     activeTab: 'learning-process'
                // },
                // {
                //     name: 'disciplines',
                //     url: '/learning-process/disciplines',
                //     template: '<disciplines></disciplines>',
                //     activeTab: 'learning-process'
                // },
                // {
                //     name: 'books',
                //     url: '/learning-process/books',
                //     template: '<books></books>',
                //     activeTab: 'learning-process'
                // },
                // {
                //     name: 'schedule',
                //     url: '/learning-process/schedule',
                //     template: '<schedule></schedule>',
                //     activeTab: 'learning-process'
                // },
            ];
            states.forEach(state => {
                $stateProvider.state(state);
            });
            $urlRouterProvider.otherwise('/home/dashboard');
        })

        .run(
        ['$rootScope', '$state', '$stateParams',
            ($rootScope, $state, $stateParams) => {
                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
        );

})();