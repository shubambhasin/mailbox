export const getFilteredMails = (mails, filter) => {
    if(filter === null)
    {
        return mails.mails.filter((mail) => mail.tag === "inbox")
    }
    else if(filter === "allmails")
    {
        return  mails.mails.map((mail) => mail)
    }
    else {
        return  mails.mails.filter((mail) => mail.tag === filter)
    }
   
}