/**
 * Created by consigliere on August 18th 2015, 4:30:13 pm.
 *
 * @module test.consigliere.appbase
 * @name appbaseService
 *
 * @description
 * Tests for appbaseService under consigliere.appbase
 * _Test description._
 */


describe('Service: consigliere.appbase.appbaseService', function () {

    'use strict';

    // load the service's module
    beforeEach(module('consigliere.appbase'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (appbaseService) {
        service = appbaseService;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
