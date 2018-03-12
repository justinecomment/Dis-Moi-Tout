import React, { Component } from 'react';

import Header from '../header/Header';
import Apropos from '../Apropos/Apropos';
import Themes from '../Themes/Themes';
import Specialistes from '../Specialistes/Specialistes';

class Main extends Component {
  render() {
    return (
        <div>
            <Header />
            <Apropos />
            <Themes />
            <Specialistes />
       </div>
    );
  }
}

export default Main;
