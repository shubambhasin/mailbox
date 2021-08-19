import React from "react";
import { useSelector } from "react-redux";

const Drafts = () => {
  const navbar = useSelector((state) => state.navbar);
  return (
    <div className={`${navbar.isOpen ? "container-slim" : "container-full"}`}>
      <div className="drafts">
        <h1 className="h1">Drafts</h1>
      </div>{" "}
    </div>
  );
};

export default Drafts;
