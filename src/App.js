import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import MovieContextProvider from "./contexts/MovieContext";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import People from "./pages/People";
import TVShows from "./pages/TVShows";

const App = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <div id="app">
      <MovieContextProvider>
        <Navbar open={mobileMenuIsOpen} toggle={setMobileMenuIsOpen} />
        <MobileMenu open={mobileMenuIsOpen} toggle={setMobileMenuIsOpen} />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:id" component={Movie} />
            <Route path="/tv-shows" component={TVShows} />
            <Route path="/people" component={People} />
          </Switch>
        </main>
        <Footer />
      </MovieContextProvider>
    </div>
  );
};

export default App;
