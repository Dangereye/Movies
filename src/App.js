import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div id='app'>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
