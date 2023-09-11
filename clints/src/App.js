import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/index";
// import UserOptions from "./component/layout/Header/UserOptions";
// import { useSelector } from "react-redux";



import Contact from "./Pages/OurPage/ContactUs";
import About from "./Pages/OurPage/AboutUs";
import Blog from "./Pages/OurPage/Blog/index";
import BlogPost from "./Pages/OurPage/Blog/slug";
import Review from "./Pages/OurPage/Review";
import PrivecyPolicy from "./Pages/OurPage/PrivecyPolicy";
import Career from "./Pages/OurPage/Career/index";
import CareerCatogery from "./Pages/OurPage/Career/JobCatogery";
import CareerPost from "./Pages/OurPage/Career/job";
import Protected from "./Route/ProtectedRoute";
import LoginSinUp from "./Pages/User/LoginSingUp"
import DashBord from "./Admin/dashBord"

import CreateBlog from "./Admin/Blogs/createBlog"
import UpdateBlog from "./Admin/Blogs/updateBlog"
import AdminBlogPost from "./Admin/Blogs/BlogDetails"
import CreatJobPost from './Admin/CaireerCrud/JobCreateGet'
import UpdateJobPost from './Admin/CaireerCrud/updatejobPost'
import CreatJobCatogre from './Admin/CaireerCrud/CreateCategeory'
import CreateProductGet from "./Admin/productCrud/ProductCreateGet"
import ProductDetails from "./Pages/productDetails"

import Carts from "./Pages/Cart/Carts"
import Shiping from "./Pages/Cart/shiping";
import SucsessOrder from "./Pages/Cart/sucsess"
import ProductCategory from "./Pages/ProductCategory";
import UpdateProdcut from "./Admin/productCrud/UpdateProduct"
import ConfirmOrder from "./Pages/Cart/ConfrimOder";

import Profile from "./Pages/User/Profile";
import Forgotpassword from "./Pages/User/ForgotPassword"
import ResetPassword from "./Pages/User/ResetPassword";
import UpdatePassword from "./Pages/User/UpdatePassword";
import UpdateProfile from "./Pages/User/UpdateProfile";

import store from "./store";
import axios from "axios";
import Payment from "./Pages/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { loadUser } from "./actions/userAction";
import MyOrders from "./Pages/Oder/Myoder";
import OrderDetails from "./Pages/Oder/OderDetails";
import Page404 from "./Pages/Page404";
import Testpage from'./Pages/testpage'

function App() {

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (

    <>
      <Routes>
        {stripeApiKey && (
          <Route exact path="/process/payment" element={<Protected>
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment />
            </Elements></Protected>} />
        )}
 <Route path="/test" element={<Testpage/>} />


        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/PrivecyPolicy" element={<PrivecyPolicy />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/BlogPost/:id" element={<BlogPost />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/LoginSinUp" element={<LoginSinUp />} />
        <Route path="/Career/CareerCatogery" element={<CareerCatogery />} />
        <Route path="/Career/CareerPost" element={<CareerPost />} />

        <Route path="/Product-Categorie/:catogery" element={< ProductCategory />} />


        {/*  user Route */}
        <Route path="/password/forgot" element={<Forgotpassword />} />
        <Route exact path="/password/reset/:resetPassToken" element={< ResetPassword />} />


        <Route element={<Protected />}>
          <Route path="/password/update" element={< UpdatePassword />} />
          <Route path="/me/update" element={< UpdateProfile />} />
          <Route path="/me/cart" element={< Carts />} />
          <Route path="/order/shipnig" element={<Shiping />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/order/success" element={<SucsessOrder />} />
          <Route path="/me/order" element={<MyOrders />} />
          <Route path="/order/details/:id" element={< OrderDetails/>} />
          <Route path="/me/acount" element={< Profile />} />
        </Route>

        {/* admin Route */}
        <Route element={<Protected isAdmin={true} />}>
          <Route path="/admin/DashBord" element={<DashBord />} />
          <Route path="/admin/createBlog" element={<CreateBlog />} />
          <Route path="/admin/updateBlog/:id" element={<UpdateBlog />} />
          <Route path="/admin/BlogPost/:id" element={<AdminBlogPost />} />
          <Route path="/admin/CreatJobPost" element={<CreatJobPost />} />
          <Route path="/admin/CreatJobCatogre" element={<CreatJobCatogre/>} />
          <Route path="/admin/UpdateJobPost/:id" element={<UpdateJobPost />} />
          <Route path="/admin/createProductGet" element={<CreateProductGet />} />
          <Route path="/admin/updateProdcut/:id" element={<UpdateProdcut />} />
        </Route>


        <Route path="/*" element={<Page404/>} />
      </Routes>


    </>

  );
}

export default App;
