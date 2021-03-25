import React from 'react';
import { Link } from "react-router-dom";

import './Button.scss';

const Button = ({label, type, url, status, handleSubmit}) =>{

    const button = () => {
        switch (type) {
            case 'link':
                return (
                    <Link
                        to={status ? url : "#"}
                        className={`${status ? 'active' : 'disabled'} button-purple`}
                    >{label}</Link>
                )
            default:
                return (
                    <button
                        onClick={handleSubmit}
                        className="button-purple"
                    >{label}</button>
                )
        }
    }

    return button();
}

Button.defaultProps = {
    status: true,
    handleSubmit: () => {},
}


export default Button;
