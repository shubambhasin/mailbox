import React from 'react'
import {Routes, Route} from "react-router-dom";
import Inbox from '../../components/pages/inbox/Inbox';

const MyRoutes = () => {
    return (
       <Routes>
        <Route path="/" exact element={<Inbox/>} />
        <Route path="/:tag" exact element={<Inbox/>} />
       </Routes>
    )
}

export default MyRoutes
