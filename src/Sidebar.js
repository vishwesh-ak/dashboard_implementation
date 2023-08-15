//sidebar implementation

import { Link } from "react-router-dom";
import "./index.css";
import {RiDashboard2Line,RiPagesLine,RiAlertLine} from "react-icons/ri";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div style={{marginTop:"50px"}}>
            <Link to="/dashboard" className="link">
            <div className="item">
                <RiDashboard2Line className="sidebaricon"/>
                Dashboard
            </div>
            </Link>
            <Link to="/bluepage" className="link">
            <div className="item">
                <RiPagesLine className="sidebaricon"/>
                BluePages SyncUp
            </div>
            </Link>
            <Link to="/onboardingseparation" className="link">
            <div className="item">
                <RiAlertLine className="sidebaricon"/>
                Onboarding/Separation
            </div>
            </Link>
            </div>
        </div>
    );
}