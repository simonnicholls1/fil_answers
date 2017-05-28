'use strict';

angular.module('filAnswersApp')
  .filter('fromNow', function () {
      return function (input) {
        return moment(input).locale(window.navigator.language).fromNow();
      };
  });
