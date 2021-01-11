import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import People from './pages/People';
import TVShows from './pages/TVShows';

const App = () => {
  return (
    <div id='app'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/movies' component={Movies} />
        <Route path='/tv-shows' component={TVShows} />
        <Route path='/people' component={People} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
