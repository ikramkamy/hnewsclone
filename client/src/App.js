
import './App.css';
import Home from './components/Home';
import DetailsPost from './components/Home/Posts/DetailsPost';
import {BrowserRouter as Router,Switch, Route, useParams } from "react-router-dom"
function App() {
  return (
    <div className="App">
    <Router>
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/detailsPost/:_id"  component={DetailsPost}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
