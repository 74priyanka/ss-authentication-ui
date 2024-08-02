import React from "react";
import { Outlet } from "react-router-dom";
import { StyledAppLayout } from "./style";
import "../../App.css";
const AppLayout = () => {
  return (
    <StyledAppLayout>
      {/* <Header /> */}
      <Outlet />
    </StyledAppLayout>
  );
};

export default AppLayout;
