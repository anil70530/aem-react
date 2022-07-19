import React from "react";
import "./header.scss";
import barIcon from "../../assets/images/bar-icon.svg";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
const Header = (props) => {
  
  const { addedItems } = props.cart;
  const handleClicked = () => props.handleClicked();


  return (
    <>
      <header className="header">
        <section className="header-content lg_px-8 column-gap">
          <div className="header-icon">
            <img src={barIcon} alt="bar" onClick={handleClicked} />

          </div>
         
          <div className="header-logo"></div>
          <nav className="header-menu">
            <Link to="aem-react/"><div className="header-menu-title">Women</div></Link>
            <Link to="aem-react/"><div className="header-menu-title">Men</div></Link>
            <Link to="aem-react/"><div className="header-menu-title">Smart Gear</div></Link>
            <Link to="aem-react/"><div className="header-menu-title">Accessories</div></Link>
          </nav>
          <div className="header-secondary">
            <div className="right-nav">
            <span className="icon-search"></span>
              <Link to="aem-react/">
              <span className="search">Search</span>
              </Link>
              
            </div>
            <div className="right-nav">
              <span className="icon-signIn"></span>
              <Link to="aem-react/"><span className="signIn">Sign In</span></Link>
            </div>
            <div className="right-nav">
              <Link to="aem-react/cart">
                <span className="icon-busket">
                  {addedItems.length > 0 && (<span className="icon-badge">{addedItems.length}</span>
                  )}
                </span>
              </Link>

            </div>
          </div>
        </section>
      </header>
    </>
  );
};
const mapStateToProps = ({ cart }) => ({
  cart
});
export default connect(mapStateToProps, {

})(Header);