import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageProfile from '../src/Pages/Profile';
import Feed from '../src/Pages/Feed';
import Nav from '../src/Components/Nav';
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
  );
}

export default App;
