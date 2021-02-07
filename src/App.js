import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileMenu from "./components/shared/MobileMenu";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Person from "./pages/Person";
import TVShows from "./pages/TVShows";
import TVShow from "./pages/TVShow";
import Season from "./pages/Season";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

const App = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <div id="app">
      <Navbar menuOpen={mobileMenuIsOpen} menuToggle={setMobileMenuIsOpen} />
      <MobileMenu open={mobileMenuIsOpen} toggle={setMobileMenuIsOpen} />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies-popular" exact component={Movies} />
          <Route path="/movies-in-theatres" exact component={Movies} />
          <Route path="/movies-top-rated" exact component={Movies} />
          <Route path="/movies-upcoming" exact component={Movies} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/tv-shows-popular" exact component={TVShows} />
          <Route path="/tv-shows-top-rated" exact component={TVShows} />
          <Route path="/tv-shows-this-week" exact component={TVShows} />
          <Route path="/tv-shows-today" exact component={TVShows} />
          <Route path="/tv-show/:id" exact component={TVShow} />
          <Route path="/tv-shows/:id/season/:season" exact component={Season} />
          <Route path="/people-popular" exact component={People} />
          <Route path="/person/:id" exact component={Person} />
          <Route path="/search" exact component={Search} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
