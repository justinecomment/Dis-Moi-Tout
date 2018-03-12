import React, { Component } from 'react';

import classes from './Apropos.css';
import Oeil from '../../assets/images/oeilTriangle.png';

class Apropos extends Component {
  render() {
    return (
        <div className={classes.apropos}>
        <h2>A PROPOS</h2>
        <div className={classes.image}>
          <img src={Oeil} alt="oeil" className={classes.oeil} />
        </div>
        <p>Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.Ibi victu recreati et quiete, postquam abierat timor, vicos opulentos adorti equestrium adventu cohortium, quae casu propinquabant, nec resistere planitie porrecta conati digressi sunt retroque concedentes omne iuventutis robur relictum in sedibus acciverunt.
Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquaen diu sunt perpetrata.</p>
       </div>
    );
  }
}

export default Apropos;
