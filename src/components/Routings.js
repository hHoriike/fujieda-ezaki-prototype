import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./Article";
import CouponList from "./CouponList";
import Header from "./Header";
import Home from "./Home";
import Map from "./Map";

const Routings = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="article" element={<Article />}>
          <Route path=":articleId" element={<Article />} />
        </Route>
        <Route path="coupon" element={<CouponList />} />
        <Route path="map" element={<Map />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routings;
