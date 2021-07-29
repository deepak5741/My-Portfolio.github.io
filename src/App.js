import React from 'react'
import Home from './Components/Home'
import Details from './Components/Details'
import Nav from './Components/Nav'

import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Nav />
<Switch>
<Route exact path="/" component={Home}></Route>
<Route exact path="/More details" component={Details} >
</Route>

</Switch>
      </Router>



    </>
  )
}

export default App
