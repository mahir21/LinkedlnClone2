import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className = "header">
      This Is The Header File
      
      <div className = "header_left">
          <img src = "" alt=""/>

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