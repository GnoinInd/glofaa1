const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
// middleware.js
const socketIo = catchAsyncErrors(async (io ) => {

    io.use(async (socket, next) => {
        const token = socket.handshake.headers.cookie?.split('=')[1];
        console.log(token);
        if (!token) {
            return next(new ErrorHander("Please Login to access this resource", 401));
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return next(new ErrorHander('Authentication error'));
            socket.decoded = decoded;
            const users = await User.findById(socket.decoded.id)
            if (users.role !== "admin") {
                return next(new ErrorHander('Authentication Role error'));
            }
            next();
        });

    });

   try {
    io.on('connection', (socket) => {
       
        console.log('A client has connected.');

        socket.on('disconnect', () => {
            console.log('A client has disconnected..');
        });
        socket.emit('notification', { message: 'recived new notifications From Glofaa.com', body: 'new Oder Recived ' });

    });
   } catch (error) {
    return next(new ErrorHander('Authentication Role error'));
   }

});
module.exports = socketIo

