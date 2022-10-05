import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import { Home, NotFound, SlugName } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/users/:slugName" element={<SlugName />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
