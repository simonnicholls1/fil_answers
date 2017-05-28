'use strict';

angular.module('filAnswersApp')
  .controller('QuestionsIndexCtrl', function ($scope, $http, $location, Auth) {

    $scope.questions = [{title:"test"}];

    $http.get('/api/questions').success(function(questions) {
      $scope.questions = questions;
    }).error(function(data, status, header, config) {
      alert("test");
    });
  });
