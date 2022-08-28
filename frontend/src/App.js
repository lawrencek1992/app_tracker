import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from "./layout/navigation/Navigation";
import { Main } from "./views/Home";
import { Login } from "./views/Login";
import { CreateAccount } from "./views/CreateAccount";
import { Applications } from "./views/Applications";
import { Offers } from "./views/Offers";
import { Profile } from "./views/Profile";
import { Todos } from "./views/Todos";


function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

  root.render (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        {/* Should you condition on the logged in user here? When no user is logged in, you should really only have the ability to see the home page, login page, and create user page. */}
          <Routes>
            <Route exact path="/" element={<Main />} render={() => (
                  <Main />
                )}/>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/applications" element={<Applications />} />
            <Route exact path="/offers" element={<Offers />} />
            <Route exact path="/todos" element={<Todos />} />     
          </Routes>
        <footer id="footer">
              <a href="https://lawrencek1992.com" id="profile-link">Created by Kelly Lawrence</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
