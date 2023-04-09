import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandigPage.jsx';
import Home from './Components/Home/Home.jsx';
import CrearDog from './Components/CrearDog/CrearDog.jsx';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/dog" exact component={CrearDog}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
