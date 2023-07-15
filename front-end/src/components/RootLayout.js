import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Container } from "@mui/system";

export default function RootLayout() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <main style={{ margin: "2rem 0rem" }}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </div>
  );
}
