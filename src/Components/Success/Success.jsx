import React from 'react';
import './Success.scss';

import check from '../../img/check.svg'

const Success = () => {
    return (<div className="wrapper">
        <span className="success-block">
            <span className="round-block">
                <img src={check} alt="done"/>
            </span>

            <span className="text-block">Done</span>
        </span>
    </div>);
}

export default Success;