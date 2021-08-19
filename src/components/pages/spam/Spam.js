import React from "react";
import { useSelector } from "react-redux";

const Spam = () => {

    const navbar = useSelector(state => state.navbar)
  return (
    <div className={`${navbar.isOpen ? "container-slim" : "container-full"}`}>
      <div className="spam">
        <h1 className="h1">Spam</h1>
      </div>
    </div>
  );
};

export default Spam;
