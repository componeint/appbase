/**
 * appbase.module.js
 * Created by anonymous on 08/12/15 16:58.
 */

(function() {
    'use strict';

    angular
        .module('appbase', [
            /* Shared */
            'appFoundation',
            'widgets',

            /* service components */
            'seneschal',
            'dashboard'

        ]);

})();