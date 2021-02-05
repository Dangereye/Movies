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

const App = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <div id="app">
      <Navbar open={mobileMenuIsOpen} toggle={setMobileMenuIsOpen} />
      <MobileMenu open={mobileMenuIsOpen} toggle={setMobileMenuIsOpen} />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/popular-movies" exact component={Movies} />
          <Route path="/in-theatres-movies" exact component={Movies} />
          <Route path="/top-rated-movies" exact component={Movies} />
          <Route path="/upcoming-movies" exact component={Movies} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/popular-tv-shows" exact component={TVShows} />
          <Route path="/top-rated-tv-shows" exact component={TVShows} />
          <Route path="/this-week-tv-shows" exact component={TVShows} />
          <Route path="/today-tv-shows" exact component={TVShows} />
          <Route path="/tv-show/:id" exact component={TVShow} />
          <Route path="/tv-shows/:id/season/:season" exact component={Season} />
          <Route path="/popular-people" exact component={People} />
          <Route path="/person/:id" exact component={Person} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
