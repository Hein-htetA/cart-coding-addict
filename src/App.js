import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayCart from "./components/DisplayCart";
import EmptyCart from "./components/EmptyCart";
import SharedLayout from "./components/SharedLayout";
import Total from "./components/Total";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<DisplayCart />} />
          <Route path="emptycart" element={<EmptyCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
