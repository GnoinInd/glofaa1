const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const ApiFeatures = require("../utils/apifeatures");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const schedule = require('node-schedule');
const User = require("../models/userModel");
const twilio = require('twilio');
const serviceAvailibilty = require("../utils/serviceAvailibilty");
const sendEmail = require("../utils/sendEmail");

const accountSid = 'AC08023676fa8145168dad53686d9b6b68';
const authToken = '2d0f9d55b91cdd10db903b2fade4255d';
const client = new twilio(accountSid, authToken);
const mobileNumbers = ['+918709796492'];
// Create new Order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (!shippingInfo) {
    return next(new ErrorHander("some thing went worng", 401));
  }
  else if (!/^\d{6}$/.test(shippingInfo.pinCode)) {
    return next(new ErrorHander("Invalid user pin code!", 401));

  }

  const users = await User.find();
  // console.log(  users.filter(user => user.pinCode === shippingInfo.pinCode));
  if (!users) {
    return next(new ErrorHander("some thing went worng", 401));
  }
  const filteredUsers = users.filter(user => user.name === 'patner');

  if (!filteredUsers) {
    return next(new ErrorHander("some thing went worng", 401));
  }
  else if (filteredUsers.length <= 0) {
    return next(new ErrorHander("Sorry, we cannot ship to your location.", 401));
  }
  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });
  scheduleNotification(order, filteredUsers)
  res.status(201).json({
    success: true,
    order,
  });

});

const scheduleNotification = catchAsyncErrors((order, filteredUsers) => {
  // Set the notification on time 
  const notificationTime = new Date(order.date);
  notificationTime.setSeconds(notificationTime.getSeconds() + 10);


  // Schedule the notification to be sent at the specified time
  const job = schedule.scheduleJob(notificationTime, function () {
    // Send the notification to the 
    
    try {
      sendNotificationToAdmin(order, filteredUsers);
      job.cancel()
    } catch (error) {
      console.log(error)
    }
   
  });

})

const sendNotificationToAdmin = catchAsyncErrors(async (order, filteredUsers, req, res) => {
  // Code to send notification to admin 
  const oderUrl = `http://localhost:3000/newoders/${order.id}`;
  const message = `Notification sent to admin for order Go Link Through Aceept The Oders link:\n\n ${oderUrl} `


  const uniqueEmails = [...new Set(filteredUsers.map(user => user.email))];
  const uniquePhone = [...new Set(filteredUsers.map(user => user.phone))];
  await sendEmail({
    email: uniqueEmails,
    subject: `New Order Received By Glofaa.com`,
    message,
  });


  uniquePhone.forEach((phone) => {
    client.messages.create({
      body: message,
      from: +16203373290,
      to: phone
    })
      .then((message) => console.log(`Sent message to ${message.to}`))
      .catch((error) => console.error(`Error sending message to ${phone}: ${error.message}`));
  });

})


// get Single Order
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});


// Get All  user  Orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 4;
  const ordersCount = await Order.find({ user: req.user._id }).countDocuments();

  const apiFeature = new ApiFeatures(Order.find({ user: req.user._id }), req.query)
    .search()
    .filter();

  let orders = await apiFeature.query;
  let filteredordersCount = orders.length;
  apiFeature.pagination(resultPerPage);

  orders = await apiFeature.query;
  res.status(200).json({
    success: true,
    orders,
    ordersCount,
    resultPerPage,
    filteredordersCount,
  });
});
// exports.myOrders = catchAsyncErrors(async (req, res, next) => {
//   const orders = await Order.find({ user: req.user._id });

//   res.status(200).json({
//     success: true,
//     orders,
//   });
// });

// get all Orders -- Admin
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// update Order Status -- Admin
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHander("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.Stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

// delete Order -- Admin
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
}); 
