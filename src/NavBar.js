import React from 'react'
import './NavBar.css';
import MenuIcon from '@material-ui/icons/Menu';
function NavBar() {
    return (
   <div className="header1">
      <div className="header_menuIcon"> <MenuIcon/>
      <span className="header_optionLineTwo">All</span>

      </div>
    <div className="header_nav">
      <div className="header_option">
        <span className="header_optionLineOne">Best Sellers</span>
        
      </div>
      <div className="header_option"><span className="header_optionLineOne">Mobile </span>
     </div>
     <div className="header_option"><span className="header_optionLineOne">Today'sDeals</span>
     </div>
     <div className="header_option"><span className="header_optionLineOne">Fashion </span>
     </div>  
     <div className="header_option"><span className="header_optionLineOne">New Releases </span>
     </div>
     <div className="header_option"><span className="header_optionLineOne">Prime </span>
     </div>
     <div className="header_option"><span className="header_optionLineOne">Electronics </span>
     </div>
     <div className="header_option"><span className="header_optionLineOne">Customer Service </span> </div>
     <div className="header_option"><span className="header_optionLineOne">Amazon Pay </span> </div>
     <div className="header_option"><span className="header_optionLineOne">Home and Kitchen </span> </div>
     <div className="header_option"><span className="header_optionLineOne">Computers</span> </div>
            
</div>
            
  </div>
    )
}

export default NavBar
