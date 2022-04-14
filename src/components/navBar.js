import React, { Component,useState } from "react";
import "../body.css";
import { Button } from "@mui/material";
import CommonButton from "./space.style";
import {
  HomeRounded,
  AccountCircleRounded,
  MenuSharp,
  ArrowDownwardOutlined,
} from "@material-ui/icons";


const Navbar = () => {
  const myStyle = {
    fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
  };

  function loginOpen() {}


  return (
    <nav
      className="home-nav p-0 w-100"
      style={{
        background: "white",
        fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
      }}
    >
     
      <div className="row justify-content-between nav p-0 body-head">
        <div className="col-sm p-2 logo-box w-50" style={{ marginLeft: "5px" }}>
          <img
            style={{ width: "15rem", height: "5rem", objectFit: "cover" }}
            src="/The Wheel Deal red.png"
            alt="The Wheel Deal Logo"
          />
        </div>

        <div className="col-4 justify-content-center">
          <div className="navbar navbar-expand-md w-100 ml-0 h-100 justify-content-end nav-options">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav w-100 justify-content-end">
                <li className="nav-item p-2">
                  <CommonButton variant="outlined" color="error" sx={myStyle}>
                    <HomeRounded />
                    Home
                  </CommonButton>
                </li>
                <li className="nav-item p-2">
                  <CommonButton sx={myStyle} variant="contained" color="error">
                    Download
                  </CommonButton>
                </li>
                <li className="nav-item p-2">
                  <CommonButton
                    color="error"
                    variant="text"
                    sx={myStyle}
                  >
                    <AccountCircleRounded />
                    Login
                  </CommonButton>
                </li>
              </ul>
            </div>
            <span
              className="navbar-toggler ellipsis"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Button variant="contained" color="error">
                <MenuSharp />
              </Button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
