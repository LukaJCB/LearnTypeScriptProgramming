/// <reference path="main.ts" />
class TutorialController {

    $location: any;

    constructor($location) {
        this.$location = $location;
    }

    play() {
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
            this.nextTutorial();
        }
    }

    nextTutorial() {
        var path: string = this.$location.path();
        var shortenedPath = path.substring(0, path.length - 1);
        var tutorialNumber = parseInt(path.charAt(path.length - 1)) + 1;
        this.$location.path(shortenedPath + tutorialNumber);
    }
}