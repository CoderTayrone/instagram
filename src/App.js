import Profile from '../src/Pages/Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageProfile from '../src/Pages/Profile';
import Feed from '../src/Pages/Feed';
import Nav from '../src/Components/Nav';



function App() {
  return (
    <>

            <Router>
              <Nav/>
                <Switch>
                    <Route path="/" exact component={Feed}/>
                    <Route path="/Profile" component={PageProfile}/>
                </Switch>
            </Router>
    </>
  );
}

export default App;
