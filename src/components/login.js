import React from "react";
import { Button, TextField } from "@mui/material";
import CommonButton from "./space.style";

export const LoginForm = ({ showLogin, setShowLogin }) => {
  const bg = {
    backgroundColor: "#fff",
    borderRadius: "0 0 0px 10px",
    height: "max-content",
    width: "30rem",
    textAlign: "center",
    top: "5rem",
    zIndex: 100,
  };
  const myStyle = {
    fontFamily: ["Barlow Condensed", "sans-serif"].join(","),
    textAlign: "center",
    textTransform: "uppercase",
  };

  const linkStyle = {
    textDecoration: "none",
  };
  const linkLine = {
    textAlign: "center",
  };

  return <>
    {showLogin ? (
      <div className="container-sm mt-3" style={bg}>
        <div className="row p-4" style={myStyle}>
          <h2>sign in</h2>
        </div>

        <div className="row p-4">
          <TextField
            label="Username/Email"
            color="primary"
            sx={{ input: { color: "black" } }}
            type="email"
            required
          />
        </div>
        <div className="row p-4">
          <TextField
            label="Password"
            color="primary"
            sx={{ input: { color: "white" } }}
            type="password"
            required
          />
        </div>
        <div className="row p-4">
          <CommonButton variant="contained" sx={myStyle}>
            Login
          </CommonButton>
        </div>
        <div className="row p-4" style={linkLine}>
          <p>
            Don't have an account?{" "}
            <a href="" style={linkStyle}>
              Sign Up Here.
            </a>
          </p>
        </div>
      </div>
    ) : null}
  </>;
};
