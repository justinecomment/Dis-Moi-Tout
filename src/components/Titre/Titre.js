import React from 'react';

import classes from './Titre.css';

const Title = (props) => {
    return (
        <div className={classes.Title}>
            <div className={classes[props.color ]}></div>
            <h1 className={classes[props.color]}>{props.children}</h1>
            <div className={classes[props.color ]}></div>
        </div>
    );
}

export default Title;
