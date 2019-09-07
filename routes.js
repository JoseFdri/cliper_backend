'use strict'

const room = require('./controllers/room')

module.exports = function (app) {
    app.get('/create-room', room.createRoom)
}