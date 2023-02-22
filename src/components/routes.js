import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/about"));

const Router = () => {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <BrowserRouter basename="react-lazy">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
