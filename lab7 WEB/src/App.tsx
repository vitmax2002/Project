import React from "react";
import {Home} from "./Home";
import {Team} from "./Team";
import {Stadium} from "./Stadium";
import {Login} from "./Login";
import {Players} from "./Players";
import {Matches} from "./Matches";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <>
    <nav className="page">
        <ul className="navbar" >
          <div className="blue_box"></div>
          <ul className="navbar" >
            <div className="chelsealogo"></div>
            <div className="navbar_cont">
                <li className="navbar_item">
                  <Link className="navbar_links" to="/">Home</Link>
                </li>
                <li className="navbar_item">
                  <Link className="navbar_links" to="/team">Team</Link>
                </li>
                <li className="navbar_item">
                  <Link className="navbar_links" to="/stadium">Stadium</Link>
                </li>
                <li className="navbar_item">
                  <Link className="navbar_links" to="/login">Log In</Link>
                </li>
            </div>
            </ul>
            <div className="blue_box"></div>
        </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/team" element={<Team />}/>
      <Route path="/stadium" element={<Stadium />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/team/players" element={<Players />}/>
      <Route path="/team/matches" element={<Matches />}/>
    </Routes> 
    </>
  );
}