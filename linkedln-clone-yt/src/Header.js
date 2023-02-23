import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Header() {
  return (
    <div className = "header">
      
     
      
      <div className = "header_left">
          
          <LinkedInIcon/>
              
             
          <div className= "header_search">
                
                <SearchIcon/>
                
              <input type = "text">
                  
              </input>
          </div>
      </div>

      <div className = "header_right">


      </div>




    </div>
  )
}



export default Header