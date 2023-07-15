import { Box } from "@mui/system";
import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <div>
      <Box
        style={{
          width: "100%",
          height: "200px",
          marginTop: "auto",
          background: "blue",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "block" }}>
          {" "}
          <Typography variant="h5"> Roshan Garg MERN App </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <FacebookSharpIcon />
          <InstagramIcon />
        </Box>
      </Box>
    </div>
  );
}
