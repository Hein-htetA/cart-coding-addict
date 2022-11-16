import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayCart from "./components/DisplayCart";
import EmptyCart from "./components/EmptyCart";
import SharedLayout from "./components/SharedLayout";
import { AppContextProvider } from "./Context";

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<DisplayCart />} />
            <Route path="emptycart" element={<EmptyCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
