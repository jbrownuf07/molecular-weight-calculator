import React from 'react';
import './App.css';
import MolecularWeightFormulas from './components/MolecularWeightFormulas';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
// import Calculator from './components/Calculator';

function App() {

    return (
      <Router>
        <Grid>
          <Grid.Column width={4}>
            <Nav />
          </Grid.Column>
         <Grid.Column stretched width={12}>
           <Segment>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/calculator" exact component={MolecularWeightFormulas} />
              <Route path="/about" exact component={About} />
            </Switch>
           </Segment>
         </Grid.Column> 
        </Grid>
      </Router>
    );
}

export default App;
