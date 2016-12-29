'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /users
 */
module.exports = {
    /**
     * summary: 
     * description: Returns all users
     * parameters: skip, limit
     * produces: application/json
     * responses: 200, default
     * operationId: findUsers
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users',
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
                path: '/users',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Creates a new user
     * parameters: user
     * produces: application/json
     * responses: 200, default
     * operationId: addUser
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users',
                operation: 'post',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
