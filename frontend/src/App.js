import React, { useState } from "react";
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

	return(
		<BrowserRouter>
			<div className="App">
				<Navigation loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
					<Routes>
						<Route exact path="/" element={
							<Main loggedInUser={loggedInUser} />
						} />
						{loggedInUser && <Route exact path="/profile" element={
							<Profile loggedInUser={loggedInUser} />
						} />}
						{loggedInUser && <Route exact path="/applications" element={
							<Applications loggedInUser={loggedInUser} />
						} />}
						{loggedInUser && <Route exact path="/offers" element={
							<Offers loggedInUser={loggedInUser} />
						} />}
						{loggedInUser && <Route exact path="/todos" element={
							<Todos loggedInUser={loggedInUser} />
						} />} 
						{!loggedInUser && <Route exact path="/login" element={
							<Login loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
						} />}
						{!loggedInUser && <Route exact path="/create-account" element={
							<CreateAccount loggedInUser={loggedInUser} />
						} />}   
					</Routes>
				<footer id="footer">
				<a href="https://lawrencek1992.com" id="profile-link">Created by Kelly Lawrence</a>
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
