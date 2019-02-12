import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home'
import Projects from '../projects'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Loader from '../../components/loader'

const App = () => (
  <Suspense fallback={ <Loader/> }>
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </main>
      <Footer />
    </div>
  </Suspense>
)

export default App
