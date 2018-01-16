// @flow

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import createHistory from 'history/createHashHistory'

import createStore from 'renderer/createStore'
import initEvents from 'renderer/initEvents'

import App from 'components/App'

import 'styles/global'

const history = createHistory()
const store = createStore(history)
const rootNode = document.getElementById('app')

initEvents(store)

function r(Comp) {
  if (rootNode) {
    render(<AppContainer>{Comp}</AppContainer>, rootNode)
  }
}

r(<App store={store} history={history} />)

if (module.hot) {
  module.hot.accept('../components/App', () => {
    const NewApp = require('../components/App').default // eslint-disable-line global-require
    r(<NewApp store={store} history={history} />)
  })
}
