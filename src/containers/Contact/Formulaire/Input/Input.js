import React from 'react';

import classes from './Input.css';

const Input = (props) => {
    let input = null;
    let validationError = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.errorText}>Error</p>
    }

    switch (props.inputType) {
        case 'input':
            input = <input
                className={inputClasses.join(' ')}
                {...props.config}
                onChange={props.changed}
                value={props.value} />
            break;
        case 'select':
            input = <select />
            break;
        default:
            input = <input
                className={inputClasses.join(' ')}
                {...props.config}
                onChange={props.changed}
                value={props.value} />
    }

    return (
        <div className={classes.allInput}>
            {input}
            {validationError}
        </div>
    );
}

export default Input;