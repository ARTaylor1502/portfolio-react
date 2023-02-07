import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ navItems }) {
  return (
    <div className="flex flex-col h-screen">
      <Header navItems={navItems} />
      <main className="mx-auto mb-auto px-6 sm:px-0 container grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
