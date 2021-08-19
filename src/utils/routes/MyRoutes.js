import React from 'react'
import {Routes, Route} from "react-router-dom";
import AllMails from '../../components/pages/all/AllMails';
import Drafts from '../../components/pages/draft/Drafts';
import Inbox from '../../components/pages/inbox/Inbox';
import Spam from '../../components/pages/spam/Spam';
const MyRoutes = () => {
    return (
       <Routes>
        <Route path="/" exact element={<Inbox/>} />
        <Route path="/:tag" exact element={<Inbox/>} />
       </Routes>
    )
}

export default MyRoutes
