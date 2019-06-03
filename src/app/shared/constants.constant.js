// Constants.constant.js
(() => {
    angular
        .module('app')
        .constant('Constants', {
            navSectionsConfig: [
                {
                    name: 'Navigation',
                    sectionList: [
                        {
                            iconClass: 'fas fa-chart-line',
                            itemName: 'dashboard',
                        },
                        {
                            iconClass: 'far fa-envelope',
                            itemName: 'emails'
                        },
                        {
                            iconClass: 'far fa-calendar-alt',
                            itemName: 'calendar'
                        },
                        {
                            iconClass: 'far fa-file',
                            itemName: 'pages'
                        }
                    ]
                },
                {
                    name: 'Featured',
                    sectionList: [
                        {
                            iconClass: 'far fa-chart-bar',
                            itemName: 'charts'
                        },
                        {
                            iconClass: 'far fa-newspaper',
                            itemName: 'articles'
                        },
                        {
                            iconClass: 'fas fa-user-friends',
                            itemName: 'users'
                        },
                        {
                            iconClass: 'far fa-star',
                            itemName: 'favorites'
                        },
                        {
                            iconClass: 'fas fa-tachometer-alt',
                            itemName: 'speed'
                        },
                        {
                            iconClass: 'fas fa-wrench',
                            itemName: 'settings'
                        }
                    ]
                },
                {
                    name: 'All Others',
                    sectionList: [
                        {
                            iconClass: 'fas fa-coins',
                            itemName: 'revenue'
                        },
                        {
                            iconClass: 'fas fa-image',
                            itemName: 'pictures'
                        },
                        {
                            iconClass: 'far fa-question-circle',
                            itemName: 'FAQs'
                        }
                    ]
                }
            ],
            totalStatisticsConfig: [
                {
                    itemName: 'Visitor',
                    count: 40600,
                    info: '10% New Day',
                    backgroundColor: '#7f8c8d'
                },
                {
                    itemName: 'Sale',
                    count: 13370,
                    info: '400 New Day',
                    backgroundColor: '#1b93e1'
                },
                {
                    itemName: 'User',
                    count: 15200,
                    info: '470 New Today',
                    backgroundColor: '#7f8c8d'
                }
            ],
            commentsConfig: [
                {
                    imageUrl: 'images/avatar1.jpg',
                    header: 'Fashion News',
                    user: 'Jolia',
                    date: '12-11-2014',
                    description: 'It\'s a very long description that reader will be disactracted by the readable looking at its layout'
                },
                {
                    imageUrl: 'images/avatar2.jpg',
                    header: 'Technology News',
                    user: 'Deo',
                    date: '13-11-2014',
                    description: 'It\'s a very long description that reader will be disactracted by the readable looking at its layout'
                },
                {
                    imageUrl: 'images/avatar3.jpg',
                    header: 'Fashion News',
                    user: 'Hulio',
                    date: '15-11-2014',
                    description: 'It\'s a very long description that reader will be disactracted by the readable looking at its layout'
                }
            ],
            notificationConfig: [
                {
                    iconClass: 'fas fa-sync',
                    warningCount: 0,
                    warningColor: 'yellow'
                },
                {
                    iconClass: 'far fa-envelope',
                    warningCount: 8,
                    warningColor: 'red'
                },
                {
                    iconClass: 'far fa-bell',
                    warningCount: 9,
                    warningColor: 'blue'
                }
            ],
            userInfoConfig: {
                iconClass: 'far fa-user-circle',
                userName: 'John Doe'
            }
        })
})();

