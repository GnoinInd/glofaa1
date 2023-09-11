const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
// middleware.js
const serviceAvailibilty = catchAsyncErrors(async (shippingInfo,next) => {
    if (!shippingInfo) {
        return next(new ErrorHander("some thing went worng", 401));
    }
    const users = await User.find();
    if (!users) {
        return next(new ErrorHander("some thing went worng", 401));
    }

    if (!/^\d{6}$/.test(shippingInfo.pincode)) {
        // console.log("Invalid pin code!");
        return next(new ErrorHander("Invalid supplier pin code!", 401));
    }
    const filteredUsers = users.filter(user => user.pincode === shippingInfo.pincode);
   if (filteredUsers.length===0) {
    return next(new ErrorHander("Sorry, we cannot ship to your location.", 401));
   }
   console.log(filteredUsers);
next()
});
module.exports = serviceAvailibilty

