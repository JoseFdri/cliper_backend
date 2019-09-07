'use strict'
const editor = require('./sockets/editor');

module.exports = function (io) {
    editor(io);
}