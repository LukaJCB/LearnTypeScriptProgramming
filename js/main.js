/// <reference path="typescript.compile.dev.ts" />
/// <reference path="TutorialController.ts" />
/// <reference path="../ts-lib/angular.d.ts" />
var condition;
function println(message) {
    if ($('#console').html().length == 0) {
        $('#console').html(message);
    }
    else {
        $('#console').html($('#console').html() + '<br/>' + message);
    }
}
angular.module('programming', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/tutorial1', {
        templateUrl: 'views/tutorial1.html'
    }).when('/tutorial2', {
        templateUrl: 'views/tutorial2.html'
    }).when('/tutorial3', {
        templateUrl: 'views/tutorial3.html'
    }).when('/tutorial4', {
        templateUrl: 'views/tutorial4.html'
    }).when('/tutorial5', {
        templateUrl: 'views/tutorial5.html'
    }).when('/tutorial6', {
        templateUrl: 'views/tutorial6.html'
    }).when('/tutorial7', {
        templateUrl: 'views/tutorial7.html'
    }).when('/tutorial8', {
        templateUrl: 'views/tutorial8.html'
    }).when('/tutorial9', {
        templateUrl: 'views/tutorial9.html'
    }).when('/beginners', {
        templateUrl: 'views/beginners.html'
    }).when('/advanced', {
        templateUrl: 'views/advanced.html'
    }).when('/about', {
        templateUrl: 'views/about.html'
    }).otherwise({
        templateUrl: 'views/home.html'
    });
}).controller('TutorialController', ['$location', TutorialController]);
