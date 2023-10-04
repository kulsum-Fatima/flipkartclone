import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import AboutFunc from './Routing/About';
import ContactUs from './Routing/Contact';
import HomePage from './Routing/home';
import LoginPage from './Routing/Login';
import NavBar from './Routing/Navbar';
import Registration from './Routing/registration';
import { Button,Carousel,Form  } from 'react-bootstrap';
import Param from "./Routing/param";
import Details from "./Routing/Details";
import DetailsByparams from "./Routing/param";
import ProtectedRoute from "./Routing/protected";
import CommonRoute from "./Routing/CommonRoute";
import TaskListFunc from "./Routing/CardOne";
import MapFunc from "./Routing/MapFunc";
import Products from './Routing/SubNavSec'
import Mobile from "./Routing/Mobile";
import Grocery from "./Routing/GroceryComponent";
import BeautyPage from "./Routing/beautyPage";
import Electronics from "./Routing/Electronics";
import ToysFunc from "./Routing/Toys";
import WatchFunc from "./Routing/Watch";
import MobileFunc from "./Routing/ProductDetails";
import ProductDetails from "./Routing/ProductDetails";
import CartFunc from "./Routing/cart";
import CartFunc2 from "./Routing/Cart2";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <NavBar />
        
        <Routes>
          {/* <Route path="/subnav" element={<Products/>}/> */}
          <Route path="/ProductDetails" element={<ProductDetails/>}/>
          <Route path="/Grocery" element={<Grocery/>}/>
          <Route path="/Mobile" element={<Mobile/>}/>
          {/* <Route path="/beauty" element={<BeautyPage/>}/> */}
          <Route path="/electric" element={<Electronics/>}/>
          <Route path="/toys" element={<ToysFunc/>}/>
          <Route path="/Watch" element={<WatchFunc/>}/>
          <Route path="/cart" element={<CartFunc2/>}/>
          <Route path="/" >
            <Route path="tologin" element={<LoginPage/>}/>
            <Route path="/"  element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
            {/* <Route path="/"> */}
              {/* <Route path="/" element={<HomePage/>}/> */}
              {/* <Route path="/" element={<TaskListFunc/>}/> */}
              {/* <Route path="/travel" element={<MapFunc/>}/> */}
               
            {/* </Route> */}
          </Route>
            {/* <Route path="/about" element={<ProtectedRoute><AboutFunc /></ProtectedRoute>} /> */}
            <Route path="/about">
            <Route path="tologin" element={ <LoginPage/> }/>
              <Route path="/about" element={<ProtectedRoute><AboutFunc/></ProtectedRoute>} /> 
            </Route>
            {/* <Route path="/contact" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} /> */}
            <Route path="/contact">
              <Route path="tologin" element={ <LoginPage/> }/>
              <Route path="/contact" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
            </Route>
            <Route path='/tologin' >
              <Route index element={<LoginPage/>}/>
              <Route path="register" element={<Registration/>}/>
            </Route>
            {/* <Route path="/Detail" element={< Details/>}/> */} 
            {/* <Route path="detailesbyid/:id" element={<DetailsByparams/>}/> */}
            <Route
                path="details"
                element={
                  <ProtectedRoute>
                    <Details />
                   </ProtectedRoute>
                }
              />
                    <Route
                path="detailsbyID/:id/:name"
                element={
                  <ProtectedRoute>
                    <DetailsByparams />
                   </ProtectedRoute>
                }
              />
                   </Routes>
      {/* </Router> */}
      {/* <Route path='/tologin' element={<LoginPage/>}> */}
      {/* <Route path="register" element={<Registration/>}/> */}
      {/* </Route> */}
      {/* <Route/> */}
    {/* </Routes> */}
     
     {/* <Functionn/> */ }
    </div >
  );
};

export default App;
