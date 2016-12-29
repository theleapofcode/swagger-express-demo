'use strict';
var dataProvider = require('../data/users.js');
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
     */
    get: function findUsers(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description: Creates a new user
     * parameters: user
     * produces: application/json
     * responses: 200, default
     */
    post: function addUser(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
