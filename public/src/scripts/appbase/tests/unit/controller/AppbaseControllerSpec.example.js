/**
 * Created by consigliere on August 18th 2015, 12:50:21 pm.
 *
 * @module test.consigliere.appbase
 * @name AppbaseController
 *
 * @description
 * Tests for AppbaseController under consigliere.appbase
 * _Test description._
 */


describe('Controller: consigliere.appbase.AppbaseController', function () {

    'use strict';

    // load the controller's module
    beforeEach(module('consigliere.appbase'));

    var ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('AppbaseController', {
            $scope : scope
        });
    }));

    it('should be defined', function () {
        expect(ctrl).toBeDefined();
    });
});
