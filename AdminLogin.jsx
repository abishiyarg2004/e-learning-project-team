import React, { useState } from 'react';
import { Paper, Typography, Link, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './loginsign.css';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import styled, { keyframes } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const magic = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px !important;
  width: 100%;
  animation: ${magic} 1s infinite;
`;
const AdminLogin = () => {
 
  const [user, setUser] = useState(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  const handleLogin = async () => {
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
        navigate('/adminhome')
        
        toast.success('Admin login successful');
      } else {
    toast.error('Invalid admin credentials');
      }

  };
  
  

  const handleClose = () => {
    
    window.location.reload();

  };

  return (
    <div className='bodyinlog'>
      <h2 style={{ color: 'white', marginTop: "60px" }}>Login to Manage the Website</h2>
      <Paper elevation={8} className='Paperinlog' style={{ padding: '30px', width: '500px', height: '400px', marginLeft: '710px', marginTop: '80px', position: 'relative' }}>
        <IconButton 
          onClick={handleClose} 
          style={{ position: 'absolute', top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
        <div style={{ width: '80%', marginLeft: '40px' }}>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
      <Typography variant="h6" style={{ marginBottom: '20px', color: '#3f51b5' }}>Admin Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '15px' }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        style={{ marginBottom: '15px' }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton variant="contained" color="primary" onClick={handleLogin}>
        Login as Admin
      </StyledButton>
    </div>
        <br />
        
      </Paper>
    </div>
  );
};

export default AdminLogin;
