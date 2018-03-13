import React from 'react';

import classes from './ContactItem.css';

const ContactItem = (props) => {
    return (
            <article  className={classes.Article}>
                <div className={classes.Rond}>
                    <span><i className={props.icon}></i></span>
                </div>
                <p>{props.children}</p>
            </article>
    );

}

export default ContactItem;
