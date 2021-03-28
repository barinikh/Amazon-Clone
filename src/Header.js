import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
function Header() {
    return (
        <div className="header">
            <img className="header_logo" alt="amazon logo"
            src="http://pngimg.com/uploads/amazon/small/amazon_PNG25.png"
            />
            <div className="header_nav">
            <div className="header_option">
                    <span className="header_optionLineOne">Hello</span>
                    <span className="header_optionLineTwo"><LocationOnIcon/> Select Your Address</span>
                </div>  
            </div>

            <div className="header_search">
            <span className="header_categories">All Categories</span>

                <input className="header_searchInput"
                type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Sign in</span>
                    <span className="header_optionLineTwo">Account & List</span>
                </div>
                <div className="header_option"><span className="header_optionLineOne">Return </span>
                <span className="header_optionLineTwo">&order</span></div>
                <div className="header_option"><span className="header_optionLineOne"></span>
                <span className="header_optionLineTwo">cart</span>
                
                </div> 
<div className="header_optionBasket">
    <AddShoppingCartIcon/>
    <span className="header_optionLineTwo header_basketCount">0</span>
</div>
            </div>
            
        </div>
    )
}

export default Header
