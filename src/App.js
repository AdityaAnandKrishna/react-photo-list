import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MovieList from "./MovieList.js";

class App extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={ MovieList} />
      </section>
    );
  }
}

export default App;
