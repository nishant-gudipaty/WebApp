import './index.css';
// import Navbar from './Navbar';
import Home from './Home';
import Test from './test';
import LogIn from './LogIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return ( 
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/test' component={Test}/>
            <Route exact path='/login' component={LogIn}/>
          </Switch>
        </div>
      </div>
    </Router>
   );
}
 
export default App;