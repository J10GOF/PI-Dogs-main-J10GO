import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx';
import Home from './Components/Home.jsx'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/home" exact component={Home}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
