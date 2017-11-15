import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Articles from './components/index/articles';
import Comments from './components/comments/comments';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Articles} />
        <Route exact path="/comments/:id" component={Comments}/>
      </div>
    </Router>
  );
}

export default App;