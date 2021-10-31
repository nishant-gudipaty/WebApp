import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Test from './test';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return ( 
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route to='/test'>
              <Test/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
   );
}
 
export default App;