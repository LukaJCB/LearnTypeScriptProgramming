/// <reference path="main.ts" />
var TutorialController = (function () {
    function TutorialController($location) {
        this.$location = $location;
    }
    TutorialController.prototype.play = function () {
        $('#console').html("");
        var code = 'declare function println(message: any): void;\n';
        code += $('#code').val();
        compile(code);
        if (error.log) {
            $('#errorMessage').html(error.log);
            $('#errorMessage').show();
        }
        else {
            $('#errorMessage').hide();
        }
        if (condition($('#console').html())) {
            this.nextTutorial();
        }
    };
    TutorialController.prototype.nextTutorial = function () {
        var path = this.$location.path();
        var shortenedPath = path.substring(0, path.length - 1);
        var tutorialNumber = parseInt(path.charAt(path.length - 1)) + 1;
        this.$location.path(shortenedPath + tutorialNumber);
    };
    return TutorialController;
})();
