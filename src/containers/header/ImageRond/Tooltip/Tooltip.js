import React from 'react';

const Tooltip = (props) => (
    <div className={props.style} { ...props.config}>{props.children}</div>
);

export default Tooltip;
 