import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
const useStayles = makeStyles((theme) => ({
  active: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",

    padding: "0.5rem 1rem",
    border: "1px solid blue",
    borderRadius: "10px",
  },
  notActive: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",

    padding: "0.5rem 1rem",
  },
}));
const Navbar = () => {
  const classes = useStayles();
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create",
      path: "/create",
    },
  ];
  return (
    <div>
      <Box>
        <AppBar elevation={0} position="static">
          <Toolbar
            style={{
              background: "black",
              display: "flex",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              style={{ fontWeight: "900", flex: 1 }}
            >
              My Todos MERN
            </Typography>
            <Box style={{ display: "flex", gap: "10px" }}>
              {links.map((item) => (
                <NavLink
                  className={
                    location.pathname === item.path
                      ? classes.active
                      : classes.notActive
                  }
                  key={item.path}
                  to={item.path}
                >
                  {" "}
                  {item.name}
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
