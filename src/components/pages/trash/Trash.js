import React from "react";
import { useSelector } from "react-redux";

const Trash = () => {
  const navbar = useSelector((state) => state.navbar);
  return (
    <div className={`${navbar.isOpen ? "container-slim" : "container-full"}`}>
      <h1 className="h1">Trash</h1>
    </div>
  );
};

export default Trash;
