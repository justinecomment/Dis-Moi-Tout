import React, { Component } from 'react';

import classes from './Header.css';
import Montagne from '../../assets/images/montagne.png'
import Terre from '../../assets/images/terre.png';
import Nuage1 from '../../assets/images/nuage_1.png';
import Nuage2 from '../../assets/images/nuage_2.png';
import Roulotte from '../../assets/images/roulotte2.png';
import Banderole from '../../assets/images/banderole.png';
import Logo from '../../assets/images/logo.png';
import BanderoleLogo from '../../assets/images/banderole_logo.png';
import Numeros from '../../assets/images/numeros.png';
import Pendule from '../../assets/images/pendule.png';
import Main from '../../assets/images/mains.png';
import Tarot from '../../assets/images/tarot.png';
import Astre from '../../assets/images/astres.png';
import PanneauBanderole from '../../assets/images/panneau_banderole.png';
import ImageHeader from './ImageHeader/ImageHeader';
import ImageRond from './ImageRond/ImageRond';
import Tooltip from './ImageRond/Tooltip/Tooltip';
import Etoile from '../../assets/images/etoile.png';

class Header extends Component {
  state = {
    numeros: false,
    astre: false,
    tarot: false,
    pendule: false,
    main: false,
  }

  onHover = (cible) => {
    switch (cible) {
      case ('numeros'):
        this.setState({ numeros: true });
        break;
      case ('pendule'):
        this.setState({ pendule: true });
        break;
      case ('tarot'):
        this.setState({ tarot: true });
        break;
      case ('astre'):
        this.setState({ astre: true });
        break;
      case ('main'):
        this.setState({ main: true });
        break;
      default:
        break;
    }
  }

  offHover = (cible) => {
    switch (cible) {
      case ('numeros'):
        this.setState({ numeros: false });
        break;
      case ('pendule'):
        this.setState({ pendule: false });
        break;
      case ('tarot'):
        this.setState({ tarot: false });
        break;
      case ('astre'):
        this.setState({ astre: false });
        break;
      case ('main'):
        this.setState({ main: false });
        break;
      default:
        break;
    }
  }


  render() {
    return (
      <div className={classes.header}>
        <div className={classes.gradient}>
          <ImageHeader name={Montagne} style={classes.montagne} />
          <ImageHeader name={Nuage1} style={classes.nuage1} />
          <ImageHeader name={Nuage2} style={classes.nuage2} />
          <ImageHeader name={Nuage2} style={classes.nuage3} />
          <ImageHeader name={Nuage1} style={classes.nuage4} />
          <ImageHeader name={Nuage2} style={classes.nuage5} />
          <ImageHeader name={Etoile} style={classes.etoile1} />
          <ImageHeader name={Etoile} style={classes.etoile2} />
          <ImageHeader name={Etoile} style={classes.etoile3} />
          <ImageHeader name={Terre} style={classes.terre} />
          <span className={classes.fleche}><i className="fas fa-angle-down"></i></span>
          <ImageHeader name={PanneauBanderole} style={classes.panneauBanderole} />
          <ImageHeader name={Banderole} style={classes.banderole} />
          <ImageHeader name={Roulotte} style={classes.roulotte} />

          <div className={classes.smoke}>
            <span className={classes.s0}></span>
            <span className={classes.s1}></span>
            <span className={classes.s2}></span>
            <span className={classes.s3}></span>
            <span className={classes.s4}></span>
            <span className={classes.s5}></span>
            <span className={classes.s6}></span>
            <span className={classes.s7}></span>
            <span className={classes.s8}></span>
            <span className={classes.s9}></span>
            <span className={classes.s10}></span>
          </div>

          <div className={classes.rondLogo}>
            <ImageHeader name={Logo} style={classes.logo} />
            <ImageHeader name={BanderoleLogo} style={classes.banderoleLogo} />
            <p className={classes.bienvenu}>BIENVENUE</p>

             <ImageRond name={Numeros}
              style={classes.numeros}
              position={classes.positionNumeros}
              tailleRond={classes.petitRond}
              closed={() => this.offHover('numeros')}
              show={() => this.onHover('numeros')}>
              {this.state.numeros ? <Tooltip style={classes.tooltip}>Numérologues</Tooltip> : null}
            </ImageRond>

            <ImageRond name={Pendule}
              style={classes.pendule}
              position={classes.positionPendule}
              tailleRond={classes.petitRond}
              closed={() => this.offHover('pendule')}
              show={() => this.onHover('pendule')}>
              {this.state.pendule ? <Tooltip style={classes.tooltip}>Mediums & Voyants</Tooltip> : null}
            </ImageRond>

            <ImageRond name={Main}
              style={classes.main}
              position={classes.positionMain}
              tailleRond={classes.petitRond}
              closed={() => this.offHover('main')}
              show={() => this.onHover('main')}>
              {this.state.main ? <Tooltip style={classes.tooltip}>Magnétiseurs</Tooltip> : null}
            </ImageRond>

            <ImageRond name={Tarot}
              style={classes.tarot}
              position={classes.positionTarot}
              tailleRond={classes.petitRond}
              closed={() => this.offHover('tarot')}
              show={() => this.onHover('tarot')}>
              {this.state.tarot ? <Tooltip style={classes.tooltip}>Tarologues & Cartomanciens</Tooltip> : null}
            </ImageRond>

            <ImageRond name={Astre}
              style={classes.astre}
              position={classes.positionAstre}
              tailleRond={classes.petitRond}
              closed={() => this.offHover('astre')}
              show={() => this.onHover('astre')}>
              {this.state.astre ? <Tooltip style={classes.tooltip}>Astrologues</Tooltip> : null}
            </ImageRond>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;
