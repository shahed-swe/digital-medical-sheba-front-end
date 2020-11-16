import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ScrollToTop from './Components/ScrollToTop/Index'

function App() {
  return (
    <div className="App">
        <Router>
          <ScrollToTop>
              <Switch>
                
              </Switch>
          </ScrollToTop>
        </Router>
    </div>
  );
}

export default App;
