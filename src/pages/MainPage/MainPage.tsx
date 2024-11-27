import React from "react";
import { Outlet } from "react-router-dom";

import { MainPageLoader } from "./MainPage.loader";
import { NavbarComponent } from "Components/NavbarComponent/NavbarComponent";

export const MainPage = () => (
  <MainPageLoader>
    <NavbarComponent />
    <Outlet />
  </MainPageLoader>
);
