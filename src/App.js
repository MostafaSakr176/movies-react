import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Movies from './components/Movies/Movies'
import Tv from './components/Tv/Tv'
import Notfound from './components/Notfound/Notfound'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Moviedetails from './components/Moviedetails/Moviedetails'
import ProtecteRoutes from './components/ProtecteRoutes/ProtecteRoutes'
import People from './components/People/People'

import {Redirect , Route , Switch} from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <ProtecteRoutes path='/home' component={Home} />
          <ProtecteRoutes path='/movies' component={Movies} />
          <ProtecteRoutes path='/tv' component={Tv} />
          <ProtecteRoutes path='/people' component={People} />
          <Route path='/register' component={Register}  />
          <Route path='/login' component={Login}  />
          <Route exact path="/moviedetails/:id" component={Moviedetails} />
          <Redirect exact from='/' to='/register' />
          <Route path='*' component={Notfound}  />

        </Switch>
      </div>
    )
  }
}

