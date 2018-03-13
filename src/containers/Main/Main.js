import React, { Component } from 'react';

import Header from '../header/Header';
import Apropos from '../Apropos/Apropos';
import Themes from '../Themes/Themes';
import Specialistes from '../Specialistes/Specialistes';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Apropos />
        <Themes />
        <Specialistes />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
