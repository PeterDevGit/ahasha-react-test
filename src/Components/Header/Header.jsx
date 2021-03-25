import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";

import logo from "../../img/logo.svg";
import menu from "../../img/icon-menu.svg";

import './Header.scss';
import {Link} from "react-router-dom";
import totalPrice from "../../utils/utils";

const Header = () => {
    const [total, setTotal] = useState(0);
    const { cart } = useSelector(store => store);

    useEffect(() => {
        const price = totalPrice(cart);
        setTotal(price);
    }, [cart]);

    return(
        <header className="header">
            <Link to="/">
                <img className="header-logo" src={logo} alt="Logotype" />
            </Link>
             <span className="header-price">$ {total}</span>
            <img className="header-menu" src={menu} alt="menu" />
        </header>
    );
}

export default Header;