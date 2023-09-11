import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,

} from "./reducers/userReducer";

import {
  newBLOGReducer,
  allBlogsReducer,
  blogDetailsReducer,
  blogDeleteReducer,
  newCommentReducer,
  commentDeleteReducer,
} from "./reducers/blogReducer";
import {
  newproductsReducer,
  productsAdminReducer,
  productDetailsReducer,
  productDltUpdateReducer,
  
} from "./reducers/adminProductReducer";
import {
  newJobeducer,
  alljobsReducer,
  JobsDeleteReducer,
  jobsDetailsReducer,
  
} from "./reducers/caireerReducer";

import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";


import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,

  blog:newBLOGReducer,
  allBlog:allBlogsReducer,
  blogsDetails:blogDetailsReducer,
  blogDeleteUpdate:blogDeleteReducer,
  blogComment:newCommentReducer,
  commentDelete:commentDeleteReducer,

  productCategory: newproductsReducer,
  adminproduct:productsAdminReducer,
  productDetails:productDetailsReducer,
  productDeleteUpdate:productDltUpdateReducer,


  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,



  NewJobPost:newJobeducer,
  alljobs:alljobsReducer,
  JobsDelete:JobsDeleteReducer,
  jobsDetails:jobsDetailsReducer
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
