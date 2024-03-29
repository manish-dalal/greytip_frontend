import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Layout from './layouts/Layout'
import Home from './Home'
import AddItem from 'components/AddItem'

const Root = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/add-speech" exact component={AddItem} />

        <Redirect to="/home" />
      </Switch>
    </Layout>
  )
}

export default Root
