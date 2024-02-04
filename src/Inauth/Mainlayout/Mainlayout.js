import React from "react";
import Header from "../Header/Header";
import Home from "../Mainpages/Home";
import Store from "../Mainpages/Store";
import Productview from "../Mainpages/Productview";
import Footer from "../Footer/Footer";
import Whishlist from "../Favourite/Whishlist";
import Addcart from "../Favourite/Addcart";
import Faq from "../Mainpages/Faq";
import About from '../Mainpages/About';
import Customersupport from '../Mainpages/Customersupport';
import Privacypolicy from '../Mainpages/Privacypolicy';
import Terms from '../Mainpages/Terms';
import Profile from '../Profile/Profile';
import Orders from "../Orders/Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Mainlayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/productview' element={<Productview />} />
        <Route path='/whishlist' element={<Whishlist />} />
        <Route path='/addcart' element={<Addcart />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/customersupport' element={<Customersupport />} />
        <Route path='/privacypolicy' element={<Privacypolicy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer />
    </>
  );
}
