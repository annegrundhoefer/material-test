// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services', 'ionic-material', 'ionMdInput'])


.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }        
        window.addEventListener('native.keyboardshow', function(){
            document.body.classList.add('keyboard-open');
        });
    })
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(10);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $ionicConfigProvider.backButton.previousTitleText(false);

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            }
        }
    })

    .state('app.singlePost', {
        url: '/singlePost',
        views: {
            'menuContent': {
                templateUrl: 'templates/singlePost.html',
                controller: 'singlePostCtrl'
            }
        }
    })

    .state('app.about', {
        url: '/About',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            }
        }
    })

    .state('app.profile', {
        url: '/Profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })

    .state('app.edit-profile', {
        url: '/EditProfile',
        views: {
            'menuContent': {
                templateUrl: 'templates/edit-profile.html',
                controller: 'EditProfileCtrl'
            }
        }
    })

    .state('app.event', {
        url: '/event/:eventId',
        views: {
            'menuContent' : {
                templateUrl: 'templates/event-view.html',
                controller: 'eventCtrl'
            }
        }
    })

    .state('app.categories', {
        url: '/categories',
        views: {
            'menuContent': {
                templateUrl: 'templates/categories.html',
                controller: 'categoriesCtrl'
            }
        }
    })

    .state('app.events', {
        url: '/events',
        views: {
            'menuContent': {
                templateUrl: 'templates/category-events-list.html',
                controller: 'eventsCtrl'
            }
        }
    })
    
    .state('app.list', {
        url: '/list',
        views: {
            'menuContent': {
                templateUrl: 'templates/list.html',
                controller: 'listCtrl'
            }
        }
    })


    .state('app.members', {
        url: '/members',
        views: {
            'menuContent': {
                templateUrl: 'templates/members.html',
                controller: 'MembersCtrl'
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
