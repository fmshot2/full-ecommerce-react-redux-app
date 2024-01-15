import { Helmet } from "react-helmet";
import React, { useEffect, useState } from 'react'

// import "./assets/css/color4.css";
//   import "./assets/css/font-awesome.css";
//   import "./assets/css/themify.css"
//   // <!--Slick slider css-->
//   import "./assets/css/slick.css"
//   import "./assets/css/slick-theme.css"
//   // <!--Animate css-->
//   import "./assets/css/animate.css"
//   // <!-- Bootstrap css -->
//   import "./assets/css/bootstrap.css"
//   // <!-- Theme css -->
import './App.css';


// start bigshop
// <!-- Favicon  -->
// <link rel="icon" href="img/core-img/favicon.ico">

import "./assets/css/bootstrap.min.css";
import "./assets/css/classy-nav.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/animate.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/magnific-popup.css";
// import "./assets/css/fontawesome-all.min.css";
// import "./assets/css/font-awesome.min.css";
import "./assets/css/icofont.min.css";

import Owldemo1 from './components/Owldemo'
import OwlDemo from './components/Owldemo'



// end bigshop

// import "./assets/css/color4.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Sliders from "./components/layout/Sliders"
import Home from './components/Home';
import Search from './components/Search';
import Searcher from "./components/layout/Searcher";
import Footer from './components/layout/Footer';
import ProductDetails from './components/product/ProductDetails';
import Cart from "./components/cart/Cart";

import Product from './components/product/Product';
import ProductByCategory from './components/ProductByCategory';
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import axios from 'axios'
import Profile from "./components/user/Profile";
import Protected from "./components/route/Protected";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";


// <!-- Style CSS -->
import "./assets/css/style.css";
import "./assets/css/femi.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {

  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      console.log('dataStripe', data);

      setStripeApiKey(data.stripeApiKey)
    }

    getStripApiKey();

  }, [])

  const { user, isAuthenticated } = useSelector(state => state.auth)
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="/product/" element={<Product />} />
          <Route path="/productbycategory/" element={<ProductByCategory />} />
          <Route path="/cart" element={<Cart />} />

          {/* <Route path="/search/:keyword" element={<Searcher/>} /> */}
          < Route path="/product/:id" element={<ProductDetails />} />
          < Route path="/login" element={<Login />} />
          < Route path="/register" element={<Register />} />
          < Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<NewPassword />} />

          <Route element={<Protected isAllowed={
            !!isAuthenticated && user.role !== 'admin'
          } />}>
            <Route path="/me" element={<Profile />} />
            <Route path="/me/update" element={<UpdateProfile />} />
            <Route path="/password/update" element={<UpdatePassword />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/order/confirm" element={< ConfirmOrder />} />
            {/* <Route path="/payment" element={< ConfirmOrder />} /> */}
            {/* {stripeApiKey && <Route path="/order/payment" element={< Payment/>} />} */}
            {stripeApiKey && (
              <Route
                path="/payment"
                element={(
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                )}
              />
            )}
          </Route>

          {/* //using only isAuthenticated as param */}
          {/* <Route element={<Protected isAuthenticated={isAuthenticated} />}>
            <Route path="/me" element={<Profile />} />
          </Route> */}


          {/* <Route
          path="analytics"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={
                !!user && user.permissions.includes('analyze')
              }
            >
              <Analytics />
            </ProtectedRoute>
          }
        /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
