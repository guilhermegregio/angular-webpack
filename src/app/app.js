import angular from 'angular';
import uirouter from 'ui-router';
import oclazyload from 'oclazyload';

import homeRoute from './home.route';

import style from './style.css';

angular.module('app', [uirouter, oclazyload, homeRoute.name]);