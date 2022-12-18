import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className="header">
      <div className="header__left">
        <div id="header__logo">
          <Link to="/" className="header__logoLink">
            <span className="header__logoBase"></span>
          </Link>
        </div>
      </div>
      <div className="header__fill">
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__tools">
          <Link to={!user && "/login"} className="header__accountList">
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello, {user ? user.email : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign out" : "Sign in"}
              </span>
            </div>
          </Link>
          <div className="header__orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </div>
          {/* <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div> */}
          {/* <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineOne header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link> */}
          <Link to="/checkout" className="header__basket">
            <div className="header__optionBasket">
              <span className="header__optionLineOne header__basketCount">
                {basket?.length}
              </span>
              <span className="header__basketSprite" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
