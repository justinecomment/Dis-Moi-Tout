import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation/NavigationItems/NavigationItems';
import Main from './containers/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation /> 

        <Switch>
          <Route path="/" component={Main} />
        </Switch>   
      </div>
    );
  }
}

export default App;
