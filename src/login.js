//sample login page

import "./index.css";
import "./App.scss";
import {TextInput,Button,Dropdown} from "@carbon/react";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigate=useNavigate();
    const items = [
        {
          id: 'option-1',
          label: 'Option 1',
        },
        {
          id: 'option-2',
          label: 'Option 2',
        },
        {
          id: 'option-3',
          label: 'Option 3',
        },
        {
          id: 'option-4',
          label: 'Option 4',
        },
      ];


    return(
        <div className="loginpage">
            <div className="loginbox">
                <TextInput type="name" className="logintext"/>
                <TextInput type="password" className="logintext"/>
                
                <Button onClick={() =>{navigate("/dashboard")}} style={{textAlign:"center"}}>Submit</Button>
            </div>
        </div>
    )
}