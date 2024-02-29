import React from 'react';

import abs from './../../img/exercises/abs-yellow.png';
import activeAbs from './../../img/exercises/abs-white.png';

const BodyPart = ({item, bodyPart, setBodyPart}) => {
    return (
        <>
            <img src={abs} alt="absolute"/>
            <p className="icon-title">{item}</p>
        </>
    )
};

export default BodyPart;