import React from 'react';

import classes from './Titre.css';

const Title = (props) => {
    return (
        <div className={classes.Title}>
            <h1 className={classes[props.color]}>{props.children}</h1>
       </div>
    );

}

export default Title;
