import React from "react";
import { useSelector } from "react-redux";

const AllMails = () => {
  const navbar = useSelector((state) => state.navbar);
  return (
    <div className={`${navbar.isOpen ? "container-slim" : "container-full"}`}>
      <div className="allmails">
        <h1 className="h1">All mails</h1>
      </div>
    </div>
  );
};

export default AllMails;
