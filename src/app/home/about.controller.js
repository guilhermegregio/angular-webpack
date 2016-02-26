export class AboutController {
    constructor() {
        this.text = 'about';
    }
}

export default angular
    .module('home.about.controller', [])
    .controller('AboutController', AboutController);