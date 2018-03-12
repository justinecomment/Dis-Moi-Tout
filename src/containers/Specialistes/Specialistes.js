import React, { Component } from 'react';

import classes from './Specialistes.css';
import SpecialistesItem from './SpecialistesItem/SpecialistesItem';
import Tarot from '../../assets/images/violet/tarot_violet.png';
import Pendule from '../../assets/images/violet/pendule_violet.png';
import Main from '../../assets/images/violet/mains_violet.png';
import Astre from '../../assets/images/violet/astre_violet.png';
import Numeros from '../../assets/images/violet/numeros_violet.png';


class Specialistes extends Component {
    render() {
        return (
            <div className={classes.specialistes}>
                <h2>SPECIALISTES</h2>
                <SpecialistesItem icon={Tarot}>Tarologues & Cartomanciens</SpecialistesItem>
                <SpecialistesItem icon={Pendule}>Mediums & Voyants</SpecialistesItem>
                <SpecialistesItem icon={Astre}>Astrologues</SpecialistesItem>
                <SpecialistesItem icon={Numeros}>Numérologues</SpecialistesItem>
                <SpecialistesItem icon={Main}>Magnétiseurs</SpecialistesItem>
            </div>

        );
    }
}

export default Specialistes;
