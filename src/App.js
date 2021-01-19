import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import MobileMenu from "./components/shared/MobileMenu";
import Navbar from "./components/Navbar";
import MovieContextProvider from "./contexts/MovieContext";
import PeopleContextProvider from "./contexts/PeopleContext";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Person from "./pages/Person";
import TVShows from "./pages/TVShows";

const App = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <div id="app">
      <MovieContextProvider>
        <PeopleContextProvider>
          <Navbar open={mobileMenuIsOpen} toggle={setMobileMenuIsOpen} />
          <MobileMenu open={mobileMenuIsOpen} toggle={setMobileMenuIsOpen} />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies" exact component={Movies} />
              <Route path="/movies/:id" component={Movie} />
              <Route path="/tv-shows" component={TVShows} />
              <Route path="/people" exact component={People} />
              <Route path="/person/:id" exact component={Person} />
            </Switch>
          </main>
          <Footer />
        </PeopleContextProvider>
      </MovieContextProvider>
    </div>
  );
};

export default App;
