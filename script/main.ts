/// <reference path="typescript.compile.dev.ts" />
/// <reference path="../ts-lib/angular.d.ts" />

var condition: (msg: string) => boolean;

function play() {
    $('#console').html("");

    var code = 'declare function println(message: any): void;\n';

    code += $('#code').val();
    compile(code);

    if (error.log) {
        $('#errorMessage').html(error.log);
        $('#errorMessage').show();
    } else {
        $('#errorMessage').hide();
    }

    if (condition($('#console').html())) {
        alert("You did it!");
    }

}

function println(message) {
    if ($('#console').html().length == 0) {
        $('#console').html(message);
    } else {
        $('#console').html($('#console').html() + '<br/>' + message);
    }
}

angular.module('programming', ['ngRoute']).config(($routeProvider) => {
    $routeProvider.when('/tutorial1'{
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
    });
});
