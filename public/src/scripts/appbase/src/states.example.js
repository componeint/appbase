/**
 * Created by consigliere on August 18th 2015, 12:50:21 pm.
 */

appbase.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        'use strict';

        // $urlRouterProvider.otherwise('/');

        $stateProvider
            //.state('main', {
            //    url         : '/',
            //    templateUrl : '/appbase'
            //})
            .state('appbase', {
                url         : '/appbase',
                templateUrl : '/appbase'
            });
            //.state('appbaseDashboard.appbase', {
            //    url         : '/dashboard/appbase',
            //    templateUrl : '/dashboard/appbase'
            //});
    }
]);