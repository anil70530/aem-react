import React from 'react'
import "./navigation.scss";
import { Link } from 'react-router-dom';
import close from "../../assets/images/close.svg";
import user from "../../assets/images/user.svg"
export const Navigation = (props) => {
    const { isMenu } = props;
        
    return (
        <>
            {
                isMenu && (<aside className="navigation-mobile-view">
                    <header className="title-header">
                        <span className='title'>Shop Categories</span>
                         <img src={close} alt="close"  className='close' onClick={()=>props.navClose()}/>
                    </header>
                    <nav className="navigation-body" >
                        <div className='category'>
                            <ul className='category-tree'>
                                <li><Link to="aem-react/"><div className="header-menu-title">Women</div></Link></li>
                                <li><Link to="aem-react/"><div className="header-menu-title">Men</div></Link></li>
                                <li><Link to="aem-react/"><div className="header-menu-title">Smart Gear</div></Link></li>
                                <li><Link to="aem-react/"><div className="header-menu-title">Accessories</div></Link></li>
                            </ul>


                        </div>

                    </nav>
                    <div className="navigation-footer">
                        <div className="account">
                            <img src={user} alt=""></img>
                            Account
                        </div>
                        <div className="signIn">
                           <Link to="#">SignIn</Link>
                        </div>
                    </div>
                </aside>)

            }
        </>

    )
}
