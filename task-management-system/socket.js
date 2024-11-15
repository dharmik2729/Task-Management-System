const { Server } = require('socket.io');

module.exports = (server) => {
    const io = new Server(server, { cors: { origin: "*" } });

    io.on('connection', (socket) => {
        console.log('User connected:', socket.id);

        socket.on('taskUpdated', (data) => {
            socket.broadcast.emit('taskUpdated', data);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });
};
