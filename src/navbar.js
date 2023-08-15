//navbar implementation

import "./index.css";
import IBMLogo from "./IBM_logo.png"
import { RiAccountCircleLine, RiDropLine, RiDropboxLine, RiMoonClearLine, RiSideBarLine, RiSunLine } from "react-icons/ri";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Navbar(){
    const [isSidebarEnabled,setIsSidebarEnabled] = useState(true);
    const [whichNavDrop,setWhichNavDrop]=useState("none");
    return(
        <div className="navbar">
            <div onClick={() => {
                
                    setIsSidebarEnabled(!isSidebarEnabled);
                    document.getElementsByClassName("sidebar")[0].style.translate=isSidebarEnabled?"0 0":"-100% 0";
                    document.getElementsByClassName("sidebar")[0].style.minWidth=isSidebarEnabled?"250px":"0px";
                    document.getElementsByClassName("sidebar")[0].style.width=isSidebarEnabled?"250px":"0px";
                    document.getElementsByClassName("sidebar")[0].style.opacity=isSidebarEnabled?"100%":"50%";
                    document.getElementsByClassName("sidebar")[0].style.transition="0.5s";
                    document.getElementsByClassName("sidebar")[0].style.overflow="hidden";
            }}>
                <RiSideBarLine className="sidebaricon"/>
                <FontAwesomeIcon icon={{faBars}} /> 
            </div>
            <p style={{fontWeight:"500",fontSize:"24px",textAlign:"center",width:"100%"}}>HEADCOUNT</p>
            <div className="navbarbuttons">
                <div>
                    <div>
                    <RiAccountCircleLine className="sidebaricon" onClick={()=>{
                        if(whichNavDrop=="account")
                            setWhichNavDrop("none");
                        else    
                            setWhichNavDrop("account");}} style={{opacity:whichNavDrop=="account"?"30%":"100%"}}/>
                    </div>
                    <div classname="navbardropdown" style={{color:"var(--fontcolor)",backgroundColor:"var(--sidebarfill)", opacity: "90%",position:"absolute",
                                                            translate:whichNavDrop==="account"?"calc(-100% + 20px) 0px":"calc(-100% + 20px) -30%",
                                                            height:whichNavDrop==="account"?"auto":"0px",overflow:"hidden",
                                                            transition:"all 0.5s", borderRadius:"5px",
                                                            padding:whichNavDrop==="account"?"20px 0px 20px 0px":"0px",
                                                            boxShadow:"0 0 5px #77777730"
                                                            }}>
                        <Link to="/" className="link" style={{color:"var(--fontcolor)"}}>
                            <div className="navdroplink">
                                Logout
                            </div>
                        </Link>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}