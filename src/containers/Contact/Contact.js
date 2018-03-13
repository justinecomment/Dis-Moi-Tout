import React from 'react';

import ContactItem from './ContactItem/ContactItem';
import classes from './Contact.css';
import Titre from '../../components/Titre/Titre';
import Nuage from '../../assets/images/contactNuage.png';
import Formulaire from './Formulaire/Formulaire';

const Contact = () => {
    return (
        <div className={classes.Contact}>
            <img src={Nuage} alt="nuage" className={classes.nuageContact}/>
            <div>
                <Titre color="Contact">contact</Titre>
                <p>Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperisaut ex necessitate ultima fortiter dimicante, superati periculose per prona discedunt.</p>
                
                <ContactItem icon="fas fa-phone">
                    Retrouvez toute notre équipe de voyants à votre écoute 24/24. Contactez le Standard :
                </ContactItem>

                <ContactItem icon="fas fa-comments">
                    Venez chater avec nos voyants en ligne.
                    Victus universis caro ferina est lactisque abundans copia qua sustentantur, et siquae alites capi per aucupium possintusni penitus ignorantes.
                </ContactItem>

                <ContactItem icon="fas fa-envelope">
                    Accéder à notre formulaire de contact
                    Victus universis caro ferina est lacdans copia qua sustentantur, et per aucupium possint,idimus frumenti usum et vini penitus ignorantes.
                </ContactItem>

                <Formulaire />
            </div>
       </div>
    );

}

export default Contact;
