import React, { Component } from 'react';
import persist from 'react-localstorage-hoc'

import { config } from './config.js'

import VenturesGrid from './components/VenturesGrid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ventures: null
    }
  }

  componentDidMount() {
    getPeople()
      .then((data) => {
        console.log('getpeople data: ', data)
        this.setState({
          ventures: data
        })
      }).catch((err) => {
        console.log('Big ooooooops! ', err)
      })
  }

  render() {
    let { ventures } = this.state
    return (
      <div className='App'>
        {ventures ? <VenturesGrid ventures={ventures} /> : <div />}
      </div>
    )
  }
}

function getPeople() {
  const url = process.env.NODE_ENV === 'development' ? config.apiVentures : config.shopifyProxy
  return window.fetch(url, {
    method: 'get'
  }).then((response) => {
    console.info('Api request success: ', response)
    return response.json()
  }).catch((err) => {
    console.error('Api request error: ', err)
  })
}
export default persist(App)