'use strict';

var app = angular.module('bizApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/html/home.html',
        })
        .state('404', {
            url: '/html/404',
            templateUrl: '/html/404.html'
        })
        .state('about', {
            url: '/html/about',
            templateUrl: '/html/about.html'
        })
        .state('contact', {
            url: '/html/contact',
            templateUrl: '/html/contact.html',
        })
        .state('pricing', {
            url: '/html/pricing',
            templateUrl: '/html/pricing.html',
        })
        .state('services', {
            url: '/html/services',
            templateUrl: '/html/services.html',
        })
    $urlRouterProvider.otherwise('/');

})
