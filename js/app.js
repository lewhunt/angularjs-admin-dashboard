// Copyright © 2015 Lewis Hunt. All rights reserved.

var app = angular.module('DashboardApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  
  // toggle side-nav menu from button and browser resize
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  
  //for prototype use only - initialising a selected radio button
  $scope.data = {
      radioGroup1 : 'option1'
    };
    
}]);

// for prototype use only - removing the hardcoded selected class when you click another link
$(document).ready(function(){
    $(".nav li:not(.panel) > a").click(function(){
        $("a").removeClass("selected");
    });
});

