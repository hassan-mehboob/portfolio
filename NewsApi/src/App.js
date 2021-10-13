import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import NewsListScreen from './screens/NewsListScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path='/' component={NewsListScreen} />
        <Route exact path='/login' component={LoginScreen} />
        <Route exact path='/signup' component={SignupScreen} />
      </Router>
    </>
  )
}

export default App
