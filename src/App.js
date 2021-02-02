import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='home' component={Home} />
          <Route exact path='about' component={About} />
          <Route exact path='projects' component={Projects} />
          <Route exact path='contact' component={Contact} />
        </Switch>
      </Router>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
