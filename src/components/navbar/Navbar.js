import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { toggleNavbar } from "../../features/navbar/navbarSlice";
import { SiGmail } from 'react-icons/si'
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState();
  const location = useLocation();
  const navigate = useNavigate()
  var searchParams = new URLSearchParams(location.search.toString());
  const filter = searchParams.get("filter");

  console.log(searchParams)

  const handleSearch = (e) => {
    e.preventDefault()
        if(filter !== null)
        {
          navigate(`?filter=${filter}&search=${searchQuery}`)
        }
        else{
          navigate(`?search=${searchQuery}`)
          
        }
        setSearchQuery("")
  };

  const dispatch = useDispatch();
  return (
    <div className="navbar flex aic">
      <div className=" flex aic">
        <div className=" flex aic gap-1 ">
          {" "}
          <span
            className="btn flex aic jcc circle p05-rem"
            onClick={() => dispatch(toggleNavbar())}
          >
            <FiMenu size={28} />
          </span>
          <div className="brand pointer">
          <NavLink to="/" className="link"><SiGmail size={28}/></NavLink>
          </div>
          <span className="clear-on-mobile">

          <h1 className="h3 pointer inline ">Mailbox</h1>
          </span>
          <small className="t-grey text-fixed">
            ({filter === null ? "Inbox" : filter})
          </small>
        </div>
      </div>
      <div className="center-search">
       <form onSubmit={handleSearch} className="flex gap-1">
       <input
          placeholder="Search mails..."
          type="text"
          value={searchQuery}
          className="input-red-outline"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-green">Search</button>
       </form>
      </div>
    </div>
  );
};

export default Navbar;
