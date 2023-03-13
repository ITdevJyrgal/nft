import React from 'react';
import logo from './../assets/img/Logo.svg'
import {Link} from 'react-router-dom'
import {BiUser} from 'react-icons/bi'


const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="navbar">
                    <Link to={"/"}><img src={logo} alt=""/> </Link>
                    <nav className="navbar-link">
                        <Link to={"/marketplace"}><a>Marketplace</a></Link>
                        <Link to={"/rankings"}><a>Rankings</a></Link>
                        <Link to={"/connect"}><a>Connect a wallet</a></Link>
                        <Link to={"/sign-up"}>
                            <button><span><BiUser/></span> Sign Up</button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;