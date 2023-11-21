import React from "react";

import Header from "../parts/Header";
import Footer from "../parts/Footer";

const MainLayout = ({ children }) => {
    return (
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default MainLayout;