import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import { FullScreenError } from './components/common/Error';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import BuySell from './components/BuySell/BuySell';
import PasswordReset from './components/Auth/PasswordReset';

class App extends Component {
  render() {
    const { location } = this.props;
    const { pathname } = location;
    return (
      <div className="App">
        <Navbar pathname={pathname} />

        <Switch>
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/about" component={About} />
          <Route exact path="/buysell" component={BuySell} />
          <Route exact path="/forgotPassword/:token" component={PasswordReset} />
          <Route component={FullScreenError} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
