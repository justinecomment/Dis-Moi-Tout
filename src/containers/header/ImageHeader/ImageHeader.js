import React from 'react';


const ImageHeader = (props) => (
    <img src={props.name} className={props.style} alt={props.name} />
);

export default ImageHeader;
