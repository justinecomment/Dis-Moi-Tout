import React from 'react';

import classes from './SpecialistesItem.css';
import Arrow from '../../../assets/images/arrow.png';

const SpecialistesItem = (props) => {
    return (
        <div className={classes.SpecialistesItem}>
            <div><img src={props.icon} alt="icon" className={classes.type} /></div>
            <p>{props.children}</p>
            <div><img src={Arrow} alt="icon" className={classes.arrow} /></div>
        </div>
    );

}

export default SpecialistesItem;
