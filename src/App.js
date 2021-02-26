import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageProfile from '../src/Pages/Profile';
import Feed from '../src/Pages/Feed';
import Nav from '../src/Components/Nav';
<<<<<<< HEAD
import {ChallengesContext} from './contexts/SearchProvider';


function App() {
  return (


            <Router>
              <Nav/>
                <Switch>
            <ChallengesContext.Provider value={'joilson_junior'}>

                    <Route path="/" exact component={Feed}/>
                    <Route path="/Profile" exact component={PageProfile}/>
                    <Route path="/Profile/:name" exact component={PageProfile}/>
            </ChallengesContext.Provider>
                    
                </Switch>
            </Router>

=======
import ResearchProvider from './context/ResearchContext';

function App() {
  return (
    <ResearchProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Feed} />
          {/* <Route path="/Profile" exact component={PageProfile}/> */}
          <Route path="/Profile/:name" exact component={PageProfile} />

        </Switch>
      </Router>
    </ResearchProvider>
>>>>>>> dbc0326fd0da7bf9c3f929678d1827a9fd282750
  );
}

export default App;
