import React, { useState } from "react";
import Heading from "./Heading";
import { Tab, Tabs, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './AdminHome.css';
import Admin from "./Admin";

const AdminHome = () => {
  const [val, setVal] = useState(0);
  const navigate = useNavigate();

  return (
    
    <div className="myhome">
      <Heading />
      <div className="main-layout">
       <Admin/>
      </div>
    </div>
          
  );
};

export default AdminHome;
