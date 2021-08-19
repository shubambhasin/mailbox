import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { setCurrentMail } from "../../features/mail/mailSlice";
import "./mailbody.css";
const MailBody = ({ mail }) => {
const dispatch = useDispatch();
   const mails = useSelector((state) => state.mails);
  const location = useLocation();
  const mailId = new URLSearchParams(location.search).get("id");

  //   const currentMail = mails.mails.filter((mail) => mail.id === Number(mailId));
  const currentMail = mails.mails.find((mail) => mail.id === Number(mailId));

  useEffect(() => {
    if (mailId!==null) {

      dispatch(setCurrentMail(currentMail));
    }
  }, [mailId, dispatch, currentMail]);
  return (
    <div>
      {Object.keys(mails.currentMail).length === 0 && (
        <h1 className="h3">Nothing to preview</h1>
      )}
      {Object.keys(mails.currentMail).length !== 0 && (
        <div className="mailbody">
          <span className="flex gap-1 mailbody-subject">
            <strong>Subject </strong>
            <h1 className="h4 ">{mails.currentMail.subject}</h1>
          </span>
          <span className="flex gap-1 mailbody-body">
            <p className="mailbody-body">{mails.currentMail.body}</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default MailBody;
