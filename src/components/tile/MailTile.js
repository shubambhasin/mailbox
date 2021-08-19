import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router';
import { togglePreviewWindow } from "../../features/navbar/navbarSlice";

import "./tile.css";
const MailTile = ({ mail }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const location = useLocation()
  const setQuery = () => {
      const currURLParams = new URLSearchParams(location.search);
      currURLParams.set("id", mail.id);
      navigate(`?${currURLParams}`);
      dispatch(togglePreviewWindow())
    };
  return (
    <div className="mail-tile p05-rem" onClick={() => setQuery()}>
      <div className="mail-subject pointer" >
        <em>Subject:</em> {mail.subject}
      </div>
      {/* <span className="mail-tag">
        {mail.tag.slice(0, 1).toUpperCase() + mail.tag.slice(1)}
      </span> */}
      {/* {modal && (
        <div className="mail-body-container">
          <div className="mail-body">
            <button
              className="btn btn-outline-red mail-body-close-btn"
              onClick={() => setModal((value) => !value)}
            >
              close
            </button>{" "}
            <div className="">
                Sender: {mail.userId}
            </div>
            <span className="h3">
              <strong >Subject: </strong>
            </span>
            <h1 className="h3">{mail.subject}</h1>
            <span className="h3">
              <strong>Content</strong>
            </span>
            <p>{mail.body}</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MailTile;
