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
import ImageHeader from './ImageHeader/ImageHeader';
import ImageRond from './ImageRond/ImageRond';
import Tooltip from './ImageRond/Tooltip/Tooltip';

class Header extends Component {
  state={
    hover: false
  }

  onHover = () => {
    this.setState({hover : true});
  }

  offHover= () => {
    this.setState({hover : false})
  }

  render() {
    return (
      <div className={classes.header} id="hash">
        <div className={classes.gradient}>
          <ImageHeader name={Montagne} style={classes.montagne} />
          <ImageHeader name={Nuage1} style={classes.nuage1} />

          <ImageHeader name={Terre} style={classes.terre} />
          <ImageHeader name={Roulotte} style={classes.roulotte} />
          {/* <img src={Ombre} className="ombre" alt="ombre"/> */}

          <div className={classes.rondLogo}>

            <ImageHeader name={Logo} style={classes.logo} />
            <ImageHeader name={BanderoleLogo} style={classes.banderoleLogo} />
            <p>BIENVENUE</p>

            <ImageRond name={Numeros} 
                style={classes.numeros} 
                position={classes.positionNumeros} 
                tailleRond={classes.petitRond}
                closed={this.offHover}
                show={this.onHover}>
                    {this.state.hover ? <Tooltip style={classes.tooltip}>Numerologie</Tooltip> : null}
            </ImageRond>

            <ImageRond name={Pendule} 
                style={classes.pendule} 
                position={classes.positionPendule} 
                tailleRond={classes.petitRond}
                closed={this.offHover}
                show={this.onHover}>
                    {this.state.hover ? <Tooltip style={classes.tooltip}>Mediums</Tooltip> : null}
            </ImageRond>

            <ImageRond name={Main} 
                style={classes.main} 
                position={classes.positionMain} 
                tailleRond={classes.petitRond}
                closed={this.offHover}
                show={this.onHover}>
                    {this.state.hover ? <Tooltip style={classes.tooltip}>blabla</Tooltip> : null}
            </ImageRond>

            <ImageRond name={Tarot} 
                style={classes.tarot} 
                position={classes.positionTarot} 
                tailleRond={classes.petitRond}
                closed={this.offHover}
                show={this.onHover}>
                    {this.state.hover ? <Tooltip style={classes.tooltip}>Tarologues</Tooltip> : null}
            </ImageRond>

            <ImageRond name={Astre} 
                style={classes.astre} 
                position={classes.positionAstre} 
                tailleRond={classes.petitRond}
                closed={this.offHover}
                show={this.onHover}>
                    {this.state.hover ? <Tooltip style={classes.tooltip}>Astrologues</Tooltip> : null}
            </ImageRond>


          </div>
          {/* <img src={Panneau} className="panneau" alt="panneau"/> */}
          <ImageHeader name={PanneauBanderole} style={classes.panneauBanderole} />
          {/* <img src={Banderole} className="banderole" alt="banderole"/> */}

        </div>
      </div>
    );
  }
}

export default Header;
