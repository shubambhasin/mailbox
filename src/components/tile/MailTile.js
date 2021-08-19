import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { openPreviewWindow } from "../../features/navbar/navbarSlice";

import "./tile.css";
const MailTile = ({ mail }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const setUrl = () => {
    const currURLParams = new URLSearchParams(location.search);
    currURLParams.set("id", mail.id);
    navigate(`?${currURLParams}`);
    dispatch(openPreviewWindow());
  };
  return (
    <div className="mail-tile p05-rem" onClick={() => setUrl()}>
      <div className="mail-subject pointer">
        <em>Subject:</em> {mail.subject}
        <p><small className="f-grey">{mail.body.slice(0,30)}</small></p>
      </div>
    </div>
  );
};

export default MailTile;
