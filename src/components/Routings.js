import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./Article";
import Home from "./Home";

const Routings = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="article" element={<Article />}>
          <Route path=":articleId" element={<Article />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routings;
