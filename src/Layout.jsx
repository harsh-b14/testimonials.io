import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css"

function Layout() {
    return (
      <>
        <Outlet/>
      </>
    )
  }
  
  export default Layout