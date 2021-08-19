export const getFilteredMails = (mails, filter) => {
  if (filter === null) {
    return mails.mails.filter((mail) => mail.tag === "inbox");
  } else if (filter === "allmails") {
    return mails.mails.map((mail) => mail);
  } else {
    return mails.mails.filter((mail) => mail.tag === filter);
  }
};

export const getFinalData = (data, search) => {
  if (search === null) {
    return data.map((data) => data);
  } else {
    return data.filter(
      (mail) => mail.subject.includes(search) || mail.body.includes(search)
    );
  }
};
