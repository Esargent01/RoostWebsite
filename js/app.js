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
        when('/', { templateUrl: 'pages/index.html', activetab: 'home', controller: HomeCtrl }).
        when('/:projectId', {
          templateUrl: function (params) { return 'pages/' + params.projectId + '.html'; },
          controller: ProjectCtrl,
          activetab: 'projects'
        }).
        when('/staff', {
          templateUrl: 'pages/staff.html',
          controller: StaffCtrl,
          activetab: 'staff'
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
  {name:'TTT2', date: new Date(2013, 0, 1)},
  {name:'Project M', date: new Date(2014, 11, 26)},
  {name:'Ping Pong', date: new Date(2014, 11, 31)},
  {name:'8 Ball', date: new Date(2015, 0, 8)},
  {name:'Melee and PM', date: new Date(2015, 0, 16)},
  {name:'9 Ball', date: new Date(2015, 1, 8)}];
});



