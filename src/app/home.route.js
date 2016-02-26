homeRouting.$inject = ['$urlRouterProvider', '$stateProvider'];

function homeRouting($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./home.html'),
            controller: 'HomeController as vm',
            resolve: {
                loadHomeController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./home');
                            $ocLazyLoad.load({name: 'home'});
                            resolve(module.controller);
                        });
                    });
                }]
            }
        })
        .state('home.about', {
            url: '/about',
            template: require('./home.about.html'),
            controller: 'AboutController as vm'
        })
        .state('login', {
            url: '/login',
            template: require('./login.html'),
            controller: 'LoginController as vm',
            resolve: {
                loadLoginController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./login');
                            $ocLazyLoad.load({name: 'login'});
                            resolve(module.controller);
                        });
                    });
                }]
            }
        });
}

export default angular
    .module('home.routing', [])
    .config(homeRouting);