'use strict';


var app = angular
  .module('ibrsystemClientApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
      })
        .when('/about', {
        templateUrl: 'views/about.html',
      })
        .when('/contact', {
          templateUrl: 'views/contact.html',
        })
        .when('/download', {
          templateUrl: 'views/download.html',
          controller: 'FileController'
        })
        .when('/endLicenceAgreement', {
          templateUrl: 'views/endLicenceAgreement.html'
        })
        .when('/faq', {
          templateUrl: 'views/FAQ.html',
        })
        .when('/licence', {
          templateUrl: 'views/licence.html',
        })
        .when('/registration/:param', {
          templateUrl: 'views/registration.html',
          controller: 'RegistrationController'
        })
        .when('/standards/:param', {
          templateUrl: 'views/standards.html',
          controller: 'StandardsController'
        })

        .otherwise({
        redirectTo: '/'
      });
  });


