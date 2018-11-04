import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Thank from '../Thank/Thank';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Feeling} />
          <Route path ="/2" component={Understanding} />
          <Route path ="/3" component={Support} />
          <Route path ="/4" component={Comments} />
          <Route path ="/5" component={Thank} />
          <Route path ="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
