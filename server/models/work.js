var async = require('async');
var db = require('../lib/db').getConnection();

module.exports = {

    findOne: function(selector, callback) {
        async.waterfall([
            function(next) {
                db.connection('work', next);
            },
            function(col, next) {
                col.findOne(selector, next);
            }
        ], callback);
    },

    find: function(selector, options, callback) {
        async.waterfall([
            function(next) {
                db.connection('work', next);
            },
            function(col, next) {
                col.find(selector, options).toArray(next);
            }
        ], callback);
    },

    insert: function(work, callback) {
        async.waterfall([
            function(next) {
                db.connection('work', next);
            },
            function(col, next) {
                db.insert(work, next);
            }
        ], function(err, items) {
            callback(err, items && items[0]);
        });
    },

    update: function(selector, updater, callback) {
        async([
            function(next) {
                db.connection('work', next);
            },
            function(col, next) {
                col.update(selector, updater, next);
            } 
        ], callback);
    },

    remove: function(selector, callback) {
        async.waterfall([
            function(next) {
                db.connection('work', next);
            },
            function(col, next) {
                col.remove(selector, next);
            }
        ], callback);
    }

};
