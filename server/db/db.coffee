#	> File Name: db.coffee
#	> Author: LY
#	> Mail: ly.franky@gmail.com
#	> Created Time: Wednesday, November 19, 2014 PM03:58:31 CST

mongoose = require "mongoose"
UserModel = require "./models/user.coffee"
config = require '../config.coffee'

db = null

init = ->
    initDB ->
        UserModel.drop ->

initDB = (callback)->
    if process.env.NODE_ENV is "DEV"
        mongoose.connect config.TEST_DB_URI
    else
        mongoose.connect config.PRODUCTION_DB_URI
    db = mongoose.connection
    callback()

module.exports = {db, init}
