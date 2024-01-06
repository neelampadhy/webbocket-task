import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Footer from "./components/Footer";
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div className="overflow-hidden">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
