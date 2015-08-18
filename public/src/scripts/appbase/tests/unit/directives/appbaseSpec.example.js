/**
 * Created by consigliere on August 18th 2015, 4:30:13 pm.
 *
 * @module test.consigliere.appbase
 * @name appbase

 * @description
 * Tests for appbase under consigliere.appbase
 * _Test description._
 */


describe('Directive: consigliere.appbase.appbase', function () {

    'use strict';

    var ele, scope;

    beforeEach(module('consigliere.appbase'));
    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();

        //update the line below!
        ele = angular.element('<Replace with directive>');
        //update the above line if you haven't!
        $compile(ele)(scope);
        scope.$apply();
    }));

    /**
     * @description
     * Sample test case to check if HTML rendered by the directive is non empty
     * */
    it('should not render empty html', function () {
        scope.$apply(function () {

            /**
             * Set the scope properties here.
             * scope.desc = 'test hostname';
             * scope.status = 'valid';
             *
             */
        });
        expect(ele.html()).not.toBe('');
    });
});
