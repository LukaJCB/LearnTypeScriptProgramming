/// <reference path="main.d.ts" />
declare class TutorialController {
    $location: any;
    navbar: string;
    constructor($location: any);
    play(): void;
    showDialog(): void;
    nextTutorial(): void;
}
