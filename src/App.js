import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ProductCollection from './containers/ProductCollection'
import ProductDetails from './containers/ProductDetails'
import ProductListing from './containers/ProductListing'

import Header from '../src/containers/Header'
function App() {
  return (
    <div className="App">
    <Router>
    
    <Header/>
      <Switch>
     
      <Route path="/collection" exact component={ProductCollection}/>
      <Route path="/products/:id" exact component={ProductDetails}/>
      <Route path="/" exact component={ProductListing}/>
      </Switch>

    </Router>
    </div>
  );
}

export default App;
