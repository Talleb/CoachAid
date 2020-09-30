import React, { useContext } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ProfilePage from "./ProfilePage.jsx";
import { UserContext } from "../../providers/UserProvider.jsx";
import Login from "pages/Login.jsx";


function Application() {
    const user = useContext(UserContext);
    return (
        user ?
            <ProfilePage />
            :
            <Router>
                <Login />
            </Router>

    );
}

export default Application;