import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";


/** Open the menu */
const menuOpen = (event) => {
    event.preventDefault()
    let targetElem = document.getElementsByTagName('body');
    targetElem[0].classList.toggle('menu--open');
    let menuclose = document.getElementsByClassName('close_icon');
    setTimeout(() => {
        menuclose[0].classList.toggle('close_visible')
    }, 1000);
}


/** Iterate menu items */
const MenuItems = (items) => {
    const { menuItems } = items;
    return (
        <ul>
            {menuItems.map((item, index) => {
                return (
                    <li key={item + index} onClick={menuOpen}>
                        <Link to={`${item}`} >
                            <span>
                                <small>0{index + 1}</small>
                                {item}
                            </span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};






function Header(props) {
    const { header } = props;
    return (
        <>
            <nav className="p-main-nav">
                <Link className="p-nav-toggle close_icon active" to="/" onClick={menuOpen}>
                    <i></i>
                </Link>
                <div className="p-nav_wrap">
                    <div
                        className="img"
                        style={{ backgroundImage: `url(${header.menuSideImage})` }}
                        onClick={menuOpen}
                    ></div>
                    <div className="p-nav-inner">
                        <div className="row">
                            <div className="col-md col_h">
                                <h1 className="nav_heading" onClick={menuOpen}>
                                    <Link className="logo" to="/" >
                                        {header.menuText}
                                    </Link>
                                </h1>
                                <MenuItems menuItems={header.menuItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md h_col">
                            <div className="p-navbar-brand">
                                <Link className="plogo" to="/">
                                    <span
                                        className="logo-img"
                                        style={{ backgroundImage: `url(${header.logoImage})` }}
                                    ></span>
                                    {header.logoText}
                                </Link>
                            </div>
                            <Link to="/hell" className="p-nav-toggle" onClick={menuOpen}>
                                <i></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
