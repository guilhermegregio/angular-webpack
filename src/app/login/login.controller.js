class LoginController {
    constructor() {
        this.text = 'login';
    }
}

export default angular
    .module('login.controller', [])
    .controller('LoginController', LoginController);