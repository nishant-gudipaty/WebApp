import './index.css';
// import Navbar from './Navbar';
import Home from './Home';
import Test from './test';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import HomePage from './HomePage';
import Posts from './Posts';
import Forums from './Forums';

const App = () => {
  return ( 
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/test' component={Test}/>
            <Route exact path='/login' component={LogIn}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/mainpage' component={MainPage}/>
            <Route exact path='/homepage' component={HomePage}/>
            <Route exact path='/posts' component={Posts}/>
            <Route exact path='/forums' component={Forums}/>
          </Switch>
        </div>
      </div>
    </Router>
   );
}
 
export default App;