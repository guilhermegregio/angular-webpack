class HomeController {
    constructor() {
        this.text = 'home';
        console.log('home');
    }
}

export default angular
    .module('home.controller', [])
    .controller('HomeController', HomeController);