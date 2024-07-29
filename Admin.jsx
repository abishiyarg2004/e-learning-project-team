
import React from 'react';
import { Button } from '@mui/material';
import user from './Images/user.jpg';
import material from './Images/material.jpeg';
import course from './Images/course.webp';
import { useNavigate } from 'react-router-dom';

const Admin=()=>{
    const navigate=useNavigate();
    return(
        <div>
            <div className='content-journey'>
          <h2 style={{ textAlign: "center", userSelect: 'none' }}>Manage Website</h2>
          <div className='level2'>
            <div className='box2'>
              <div className='box-content2'>
                <p style={{ fontFamily: '', fontWeight: '100px', fontSize: '25px' }}>Manage Users here!</p>
                <img src={user} alt='Online Courses' />
                <Button variant="outlined" onClick={()=>{navigate('/manageusers')}}>Manage users</Button>
              </div>
            </div>
            <div className='box2'>
              <div className='box-content2'>
                <p style={{ fontFamily: '', fontWeight: '100px', fontSize: '25px' }}>Manage Courses here</p>
                <img src={course} alt='Tournaments' />
                <br></br>
                <Button variant='outlined'> Manage courses</Button>
              </div>
            </div>
            <div className='box2'>
              <div className='box-content2'>
                <p style={{ fontFamily: '', fontWeight: '100px', fontSize: '25px' }}>Manage Study Materials here</p>
                <img src={material} alt='Camp' />
                <Button variant='outlined'>Manage Study materials</Button>
              </div>
              </div>
           </div>
           </div>
           
        </div>
    )
}
export default Admin;