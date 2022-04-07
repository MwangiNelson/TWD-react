import React from "react";
import { TextField } from "@mui/material";

const CommonTF = ({ label, color, style, variant }) => {
  return <TextField variant={variant} color={color} sx={style} label={label} />;
};

export default CommonTF;
