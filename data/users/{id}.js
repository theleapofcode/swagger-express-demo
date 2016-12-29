'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /users/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: Returns a user based on a single Id
     * parameters: id
     * produces: application/json
     * responses: 200, default
     * operationId: findUserById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{id}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: deletes a single user based on the Id supplied
     * parameters: id
     * produces: 
     * responses: 204, default
     * operationId: deleteUser
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{id}',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/{id}',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};
