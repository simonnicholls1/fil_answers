'use strict';

angular.module('filAnswersApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('questionsCreate', {
        url: '/questions/create',
        templateUrl: 'app/questionsCreate/questionsCreate.html',
        controller: 'QuestionsCreateCtrl'
      });
  });
