import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'

import Header from '../../components/header'
import Loader from '../../components/loader'

const App = () => (
  <Suspense fallback={ <Loader/> }>
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </Switch>
      </main>
    </div>
  </Suspense>
)

export default App
