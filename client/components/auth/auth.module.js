'use strict';

angular.module('filAnswersApp.auth', [
  'filAnswersApp.constants',
  'filAnswersApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
