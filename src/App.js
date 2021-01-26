import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import MobileMenu from "./components/shared/MobileMenu";
import Navbar from "./components/Navbar";
import MovieContextProvider from "./contexts/MovieContext";
import PeopleContextProvider from "./contexts/PeopleContext";
import TVContextProvider from "./contexts/TVContext";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Person from "./pages/Person";
import TVShows from "./pages/TVShows";
import TVShow from "./pages/TVShow";

const App = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <div id="app">
      <MovieContextProvider>
        <PeopleContextProvider>
          <TVContextProvider>
            <Navbar open={mobileMenuIsOpen} toggle={setMobileMenuIsOpen} />
            <MobileMenu open={mobileMenuIsOpen} toggle={setMobileMenuIsOpen} />
            <main>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/movies/:id" component={Movie} />
                <Route path="/tv-shows" exact component={TVShows} />
                <Route path="/tv-shows/:id" component={TVShow} />
                <Route path="/people" exact component={People} />
                <Route path="/people/:id" exact component={Person} />
              </Switch>
            </main>
            <Footer />
          </TVContextProvider>
        </PeopleContextProvider>
      </MovieContextProvider>
    </div>
  );
};

export default App;
