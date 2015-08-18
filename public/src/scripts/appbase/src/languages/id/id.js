/**
 * Created by consigliere on August 18th 2015, 12:50:21 pm.
 */

// appbase
angular.module('consigliere.appbase').config(['$translateProvider', function ($translateProvider) {
    'use strict';
    $translateProvider.translations('id', {
        TITLE : 'Hallo',
        FOO   : 'Ini adalah paragraf.'
    });
    // $translateProvider.preferredLanguage('id');
}]);

//appbase
//  .controller('Ctrl', function ($scope, $translate) {
//      $scope.changeLanguage = function (key) {
//          $translate.use(key);
//      };
//  });

// <h1>{{ 'TITLE' | translate }}</h1>
// <p>{{ 'FOO' | translate }}</p>