import React, { Component } from 'react';

import classes from './Themes.css';

class Themes extends Component {
  render() {
    return (
        <div className={classes.themes}>
            <h2>THEMES</h2>
            <p>Abusus enim multitudine hominum, quam tranquillis in rebus diutius rexit, ex agrestibus habitaculis urbes construxit multis opibus firmas et viribus, quarum ad praesens pleraeque licet Graecis nominibus appellentur, quae isdem ad arbitrium inposita sunt conditoris, primigenia tamen nomina non amittunt, quae eis Assyria lingua institutores veteres indiderunt.</p>
        
            <div className={classes.ensembleRonds}>
                <div className={classes.rond}>
                    <p>Travail & Finance</p>
                </div>
                <div className={classes.rond}>
                    <p>Amour & Romance</p>
                </div>
                <div className={classes.rond}>
                    <p>Découverte de soi</p>
                </div>
                <div className={classes.rond}>
                    <p>Famille & enfants</p>
                </div>
                <div className={classes.rond}>
                    <p>Autres questions</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Themes;
