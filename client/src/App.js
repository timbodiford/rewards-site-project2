import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import './App.css';
import Header from './components/Header';
import SingleUser from './components/SingleUser';
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <div className="content">


        <Router>
          <div className="header-wrapper content-inside">
            <Header />

          </div>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/users/:userId" component={SingleUser} />
            {/* <Route exact path='/users/:userId/shop' render={ShopViewComponent} /> */}
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:productId" component={SingleProduct} />
            <Route exact path="/privacy" component={PrivacyPolicy} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />

          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
