import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { router } from "./routers/MainRouter";

import "./App.styl";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => (
  <div className="app">
    <div className="content">
      <ToastContainer />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  </div>
);
