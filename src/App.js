import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import CSS
import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";

//Login handlers for Firebase Auth
import UserProvider from "./providers/UserProvider";

//Checks if user is logedin or not
import Application from "./components/authentication/Application.jsx";

//Import pages/views 
import LandingPage from "./pages/LandingPage.jsx";
import LogIn from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import PasswordReset from "pages/PasswordReset";





function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/passwordreset">
            <div className="App">
              <PasswordReset />
            </div>
          </Route>
          <Route path="/signup">
            <div className="App">
              <SignUp />
            </div>
          </Route>
          <Route path="/application">
            <div className="App">
              <Application />
            </div>
          </Route>
          <Route path="/login">
            <div className="App">
              <LogIn />
            </div>
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;