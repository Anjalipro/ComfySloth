import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ErrorPage from './pages/ErrorPage';
import CheckoutPage from './pages/CheckoutPage';
import SingleProductPage from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import PrivateRoute from './pages/PrivateRoute'
import  AuthWrapper  from './pages/AuthWrapper';

function App() {
  return <>
  <AuthWrapper>
  <Router>
    <Navbar/>
    <Sidebar/>
    <Switch>
      <Route exact path='/'><HomePage/></Route>
      <Route exact path='/about'><AboutPage/></Route>
      <Route exact path='/products'><ProductsPage/></Route>
      <Route exact path='/products/:id' children={<SingleProductPage/>}></Route>
      <PrivateRoute exact path='/checkout'><CheckoutPage/></PrivateRoute>
      <Route exact path='/cart'><CartPage/></Route>
      <Route path='*'><ErrorPage/></Route>
    </Switch>
    <Footer/>
  </Router>
  </AuthWrapper>

  </>
}

export default App