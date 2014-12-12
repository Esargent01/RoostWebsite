/*
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// angular.js main app initialization
var app = angular.module('example359', []).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'pages/index.html', activetab: 'projects', controller: HomeCtrl }).
        when('/project/:projectId', {
          templateUrl: function (params) { return 'pages/' + params.projectId + '.html'; },
          controller: ProjectCtrl,
          activetab: 'projects'
        }).
        when('/privacy', {
          templateUrl: 'pages/privacy.html',
          controller: PrivacyCtrl,
          activetab: 'privacy'
        }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });

        // onclick event handlers
        $scope.showForm = function () {
          $('.contactRow').slideToggle();
        };
        $scope.closeForm = function () {
          $('.contactRow').slideUp();
        };

        // save the 'Contact Us' form
        $scope.save = function () {
          $scope.loaded = true;
          $scope.process = true;
          $http.post('sendemail.php', $scope.message).success(function () {
              $scope.success = true;
              $scope.process = false;
          });
        };
  }]);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);

app.controller('rosterController', function($scope){
  $scope.imgs = [{
    src:'images/staff/aaron.jpg',
    title:'Aaron'
  },{
    src:'images/staff/alex.jpg',
    title:'Alex'
  },{
    src:'images/staff/alina.jpg',
    title:'Aleena'
  },{
    src:'images/staff/alondra.jpg',
    title:'Alondra'
  },{
    src:'images/staff/benga.jpg',
    title:'Benga'
  },{
    src:'images/staff/jesse.jpg',
    title:'Jesse'
  },{
    src:'images/staff/kieu.jpg',
    title:'Kieu'
  },{
    src:'images/staff/mario-ma.jpg',
    title:'Mario'
  },{
    src:'images/staff/mario-mo.jpg',
    title:'Mario'
  },{
    src:'images/staff/miguel.jpg',
    title:'Miguel'
  },{
    src:'images/staff/sherman.jpg',
    title:'Sherman'
  },{
    src:'images/staff/travis.jpg',
    title:'Travis'
  },{
    src:'images/staff/african.jpg',
    title:'Ebola'
  },{
    src:'images/staff/anissa.jpg',
    title:'Anissa'
  }];
});

app.controller('timerController', function($scope){
  $scope.currentdate = new Date();
  $scope.games = [
  {name:'TTT2', date:'2014-10-23'},
  {name:'Project M', date:'2014-10-27'},
  {name:'Ping Pong', date:'2014-11-02'},
  {name:'8 Ball', date:'2015-12-09'},
  {name:'Melee and Project M', date:'2015-12-15'},
  {name:'9 Ball', date:'2015-12-19'}];
});



