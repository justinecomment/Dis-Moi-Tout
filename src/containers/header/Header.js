import React, { Component } from 'react';

import classes from './Header.css';
import Montagne from '../../assets/images/montagne.png'
import Terre from '../../assets/images/terre.png';
import Nuage1 from '../../assets/images/nuage_1.png';
import Roulotte from '../../assets/images/roulotte.png';
// import Ombre from '../../assets/images/ombre.png';
// import Banderole from '../../assets/images/banderole.png';
import Logo from '../../assets/images/logo.png';
import BanderoleLogo from '../../assets/images/banderole_logo.png';
import Numeros from '../../assets/images/numeros.png';
import Pendule from '../../assets/images/pendule.png';
import Main from '../../assets/images/mains.png';
import Tarot from '../../assets/images/tarot.png';
import Astre from '../../assets/images/astres.png';
import PanneauBanderole from '../../assets/images/panneau_banderole.png';

class Header extends Component {
  render() {
    return (
      <div className={classes.header}>
        <div className={classes.gradient}>        
          <img src={Montagne} className={classes.montagne} alt="montagne"/>
          
          <img src={Terre} className={classes.terre} alt="terre"/>
          <img src={Roulotte} className={classes.roulotte} alt="roulotte"/>
            {/* <img src={Ombre} className="ombre" alt="ombre"/> */}

          <div className={classes.rondLogo}>
            <img src={Logo} className={classes.logo} alt="logo"/>
            <img src={BanderoleLogo} className={classes.banderoleLogo} alt="banderoleLogo"/>
            <p>BIENVENUE</p>
            <div className={classes.rondNumeros}>
              <img src={Numeros} className={classes.numeros} alt="numeros"/>
            </div>
            <div className={classes.rondPendule}>
              <img src={Pendule} className={classes.pendule} alt="pendule"/>
            </div>
            <div className={classes.rondMain}>
              <img src={Main} className={classes.main} alt="main"/>
            </div>
            <div className={classes.rondTarot}>
              <img src={Tarot} className={classes.tarot} alt="tarot"/>
            </div>
            <div className={classes.rondAstro}>
              <img src={Astre} className={classes.astre} alt="astre"/>
            </div>
          </div>
          {/* <img src={Panneau} className="panneau" alt="panneau"/> */}
          <img src={PanneauBanderole} className={classes.panneauBanderole} alt="panneauBanderole"/>
          <img src={Nuage1} className={classes.nuage1} alt="nuage1"/>
         {/* <img src={Banderole} className="banderole" alt="banderole"/> */}

        </div>
      </div>
    );
  }
}

export default Header;
