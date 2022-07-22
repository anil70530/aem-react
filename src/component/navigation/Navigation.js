import React from 'react'
import "./navigation.scss";
import { Link, useNavigate } from 'react-router-dom';
import close from "../../assets/images/close.svg";
import user from "../../assets/images/user.svg"
export const Navigation = (props) => {
    const { isMenu } = props;
     const navigate=useNavigate();   
     const navLink=()=>{
        navigate('aem-react/');
        props.navClose();
     }
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
                                <li><div className="header-menu-title" onClick={navLink}>Women</div></li>
                                <li><div className="header-menu-title" onClick={navLink}>Men</div></li>
                                <li><div className="header-menu-title" onClick={navLink}>Smart Gear</div></li>
                                <li><div className="header-menu-title" onClick={navLink}>Accessories</div></li>
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
