import React from "react";
import { Button, TextField } from "@mui/material";
import CommonButton from "./space.style";

function LoginForm() {
  const bg = {
    backgroundColor: "#fff",
    position: "fixed",
    borderRadius: "0 0 0px 10px",
    height: "max-content",
    right:'0',
    width: "30rem",
    textAlign: "center",
    top:'5rem',
    zIndex:3
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

  return (
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
  );
}

export default LoginForm;
