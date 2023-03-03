import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


function Header() {
  return (
    <div className = "header">
      
     
      
      <div className = "header_left">
          
        <i className='header_left_linkedIn_Icon'>  <LinkedInIcon fontSize="large"/> </i>
              
             
          <div className= "header_search">
                
          
                <SearchIcon />
                <input type = "text"/>
               
          </div>  
                  
              
          
        </div>

      <div className = "header_right">
          <HeaderOption Icon = {HomeIcon} title="Home" />
          <HeaderOption Icon = {SupervisorAccountIcon} title = "My NetWork"/> 
          <HomeIcon/>
       </div>




    </div>
  )
}



export default Header