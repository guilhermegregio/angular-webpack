import homeController from './home/home.controller';
import homeAboutController from './home/about.controller';

export default angular
    .module('home', [
        homeController.name,
        homeAboutController.name
    ]);