import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Loading from "../Loading";

function Applayout() {
  const lading = useNavigation();
  if (lading.state === "loading") {
    return( <Loading />);
  } else {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Applayout;
