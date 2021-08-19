import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MyRoutes from "./utils/routes/MyRoutes";
import NavbarVertical from "./components/navbar/NavbarVertical";
import { getMails } from "./features/mail/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { closeNavbar, openNavbar } from "./features/navbar/navbarSlice";
function App() {
  const mails = useSelector((state) => state.mails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mails.status === "idle") {
      dispatch(getMails());
    }
  }, [dispatch, mails.status]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        dispatch(closeNavbar());
      } else if(window.innerWidth > 778) {
        dispatch(openNavbar())
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      handleResize();
    };
  }, [window.innerWidth]);

  return (
    <div className="App">
      <Navbar />
      <NavbarVertical />

      <MyRoutes />
    </div>
  );
}

export default App;
