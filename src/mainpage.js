//main layout description

import "./index.css";

import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import BluePage from "./bluepages";
import OnboardingSeparation from "./joinleave";

export default function Mainpage(){
    return(
        <div className="mainpage">
            <Navbar/>
            <div className='mainbody'>
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    )
}