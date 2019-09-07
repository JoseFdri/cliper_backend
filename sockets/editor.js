'use strict'
module.exports = function(io) {
    const nsp  = io.of('/editor');
    nsp.on('connection', (socket) => {
        console.log('Someone is connected to clipboard', socket.conn.id);
        socket.on('change', (data) => {
            /*client.get('visits', (err, visits) => {
              client.set('visits', parseInt(visits) + 1);
            }); */
            nsp.emit('new-data', data);
            console.log('change event triggered')
        });
    })
}