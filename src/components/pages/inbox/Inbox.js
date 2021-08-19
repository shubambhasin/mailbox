import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { openPreviewWindow, togglePreviewWindow } from "../../../features/navbar/navbarSlice";
import { getFilteredMails, getFinalData } from "../../../utils/utils";
import MailBody from "../../mailBody/MailBody";
import Mails from "../../mails/Mails";
import { GrClose } from "react-icons/gr";
import "./inbox.css";
const Inbox = () => {
  const mails = useSelector((state) => state.mails);
  const { isOpen, isPreviewWindowOpen } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const location = useLocation();
  var searchParams = new URLSearchParams(location.search.toString());
  const filter = searchParams.get("filter");
  const search = searchParams.get("search");
  const filteredMails = getFilteredMails(mails, filter);
  const finalData = getFinalData(filteredMails, search);
  const mailId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    if (mailId) {
      dispatch(openPreviewWindow());
    }
  }, [mailId]);

  return (
    <div className={`${isOpen ? "container-slim " : "container-full"}`}>
      <div className="flex jcsb">
        {" "}
        <h1 className="h1 ">
          {filter !== null
            ? filter?.slice(0, 1).toUpperCase() + filter.slice(1)
            : "Inbox"}
        </h1>
        {isPreviewWindowOpen ? (
          <button onClick={() => dispatch(togglePreviewWindow())} className="btn">
            <GrClose size={14} />
          </button>
        ) : (
          ""
        )}
      </div>
      {mails.status === "loading" && <h1 className="h3">Loading...</h1>}
      <div className="flex gap-2">
        {mails.status === "success" && (
          <div className={`${isPreviewWindowOpen} ? inbox  : full-inbox`}>
            {" "}
            {finalData.length === 0 ? (
              <h1 className="h4 f-center">Did not match anything...</h1>
            ) : (
              <Mails mails={finalData} />
            )}{" "}
          </div>
        )}

        {isPreviewWindowOpen && (
          <div className="mailbody-container">
            {" "}
            <MailBody />
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
