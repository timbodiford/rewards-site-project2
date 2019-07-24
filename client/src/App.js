import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import './App.css';
import Header from './components/Header';
import SingleUser from './components/SingleUser';
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import ShopViewComponent from './components/ShopView'


function App() {
  return (
    <div className="App">


      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/users/:userId" component={SingleUser} />
          {/* <Route exact path='/users/:userId/shop' render={ShopViewComponent} /> */}
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:productId" component={SingleProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
