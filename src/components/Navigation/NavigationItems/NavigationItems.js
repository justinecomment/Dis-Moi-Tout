import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import Drapeau from '../../../assets/images/drapeau.png';


const NavigationItems = () => (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/'></NavigationItem> {/**Div invisible**/}
            <NavigationItem link='/'>ACCUEIL</NavigationItem>
            <NavigationItem link='/a-propos'>A PROPOS</NavigationItem>
            <NavigationItem link='/themes'>THEMES</NavigationItem>
            <NavigationItem link='/specialistes'>SPECIALISTES</NavigationItem>
            <NavigationItem link='/contact'>CONTACT</NavigationItem>
            <div className={classes.Icons}>
                <NavigationItem link='/'>
                    <span className={classes.IconUser}><i className="fas fa-user-circle"></i></span>
                </NavigationItem>
                <NavigationItem link='/' className={classes.Flag}>
                    <img src={Drapeau} className={classes.Drapeau} alt="drapeau" />
                    <span className={classes.IconDrapeau}><i className="fas fa-angle-down"></i></span>
                </NavigationItem>
            </div>
        </ul>
);

export default NavigationItems;
