import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { BiFileBlank } from "react-icons/bi";
import { MdInbox } from "react-icons/md";
import { RiSpamLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";

const NavbarVertical = () => {
  const navbar = useSelector((state) => state.navbar);
  const navigate = useNavigate();
  return (
    <div
      className={`${
        navbar.isOpen ? "navbar-vertical-full" : "navbar-vertical-slim"
      }`}
    >
      <div className="flex flex-col">
        <NavLink to="/" className="link center gap-1  p1-rem">
          <MdInbox size={28} />
          {navbar.isOpen && "Inbox"}
        </NavLink>
        <span
          className="link center  gap-1 p1-rem"
          onClick={() => navigate("?filter=allmails")}
        >
          <GrMail size={28} />
          {navbar.isOpen && "All"}
        </span>
        <span
          className="link center  gap-1  p1-rem"
          onClick={() => navigate("?filter=draft")}
        >
          <BiFileBlank size={28} />
          {navbar.isOpen && "Draft"}
        </span>
        <span
          className="link center gap-1 p1-rem"
          onClick={() => navigate("?filter=spam")}
        >
          {" "}
          <RiSpamLine size={28} />
          {navbar.isOpen && "Spam"}
        </span>
        <span
          className="link center gap-1 p1-rem"
          onClick={() => navigate("?filter=trash")}
        >
          {" "}
          <RiSpamLine size={28} />
          {navbar.isOpen && "trash"}
        </span>
      </div>
    </div>
  );
};

export default NavbarVertical;
