import React, { Component } from 'react';

import Header from '../header/Header';
import Apropos from '../Apropos/Apropos';
import Themes from '../Themes/Themes';
import Specialistes from '../Specialistes/Specialistes';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ScrollableAnchor from 'react-scrollable-anchor'

class Main extends Component {
  render() {
    return (
        <div>
        <Header />
          <ScrollableAnchor id={'apropos'}>
            <Apropos />
            </ScrollableAnchor>
          <ScrollableAnchor id={'themes'}>
            <Themes />
            </ScrollableAnchor>
          <ScrollableAnchor id={'specialistes'}>
            <Specialistes />
            </ScrollableAnchor>
          <ScrollableAnchor id={'contact'}>
            <Contact />
            </ScrollableAnchor>
          <ScrollableAnchor id={'footer'}>
            <Footer />
            </ScrollableAnchor>
       </div>
    );
  }
}

export default Main;
