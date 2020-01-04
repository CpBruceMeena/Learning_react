import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
