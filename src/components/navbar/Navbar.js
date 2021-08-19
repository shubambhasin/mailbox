import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { toggleNavbar } from "../../features/navbar/navbarSlice";
import "./navbar.css";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState();
  const location = useLocation();
  const navigate = useNavigate()
  // console.log(location.search.toString());
  var searchParams = new URLSearchParams(location.search.toString());
  // console.log(searchParams.get("filter"));
  const filter = searchParams.get("filter");

  const handleSearch = (e) => {
    e.preventDefault()
      navigate(`?search=${searchQuery}`)
  };

  const dispatch = useDispatch();
  return (
    <div className="navbar flex aic">
      <div className=" flex aic">
        <div className=" flex aic gap-1">
          {" "}
          <span
            className="btn flex aic jcc circle p05-rem"
            onClick={() => dispatch(toggleNavbar())}
          >
            <FiMenu size={28} />
          </span>
          <h1 className="h3 pointer inline">Mailbox</h1>
          <small className="t-grey">
            ({filter === null ? "Inbox" : filter})
          </small>
        </div>
      </div>
      <div>
       <form onSubmit={handleSearch}>
       <input
          placeholder="Search mails..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
       </form>
      </div>
    </div>
  );
};

export default Navbar;
