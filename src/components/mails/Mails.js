import React from "react";
import MailTile from "../tile/MailTile";

const Mails = ({ mails }) => {
  return (
    <div>
      {mails.map((data) => {
        return <MailTile mail={data} key={data.id} />;
      })}
    </div>
  );
};

export default Mails;
