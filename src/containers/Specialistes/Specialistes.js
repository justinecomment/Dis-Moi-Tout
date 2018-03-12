import React, { Component } from 'react';

import classes from './Specialistes.css';

class Specialistes extends Component {
  render() {
    return (
        <div className={classes.specialistes}>
            <h2>SPECIALISTES</h2>
            <div className={classes.btnSpecialistes}>
                <p>Tarologues & Cartomanciens</p>
            </div>
        </div>
    );
  }
}

export default Specialistes;
