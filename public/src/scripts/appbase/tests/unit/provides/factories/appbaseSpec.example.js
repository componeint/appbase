/**
 * Created by consigliere on August 18th 2015, 4:30:13 pm.
 *
 * @module test.consigliere.appbase
 * @name appbase
 *
 * @description
 * Tests for appbase under consigliere.appbase
 * _Test description._
 */


describe('Service: consigliere.appbase.appbase', function () {

    'use strict';

    // load the service's module
    beforeEach(module('consigliere.appbase'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (appbase) {
        service = appbase;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
