import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PhotoList from "./PhotoList.js";
import PhotoDetails from "./PhotoDetails.js";

class App extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/" component={PhotoList} />
          <Route path="/:photo_id" component={PhotoDetails} />
        </Switch>
      </section>
    );
  }
}

export default App;
