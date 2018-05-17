import React, { Component } from 'react';
import persist from 'react-localstorage-hoc'

import './App.css';

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
        <div className='ventures-titles'>Our Ventures</div>
        {ventures ? <VenturesGrid ventures={ventures} /> : <div />}
      </div>
    )
  }
}

function getPeople() {
  return window.fetch(process.env.REACT_APP_PERSON_API_URL, {
    method: 'get'
  }).then((response) => {
    console.info('Api request success: ', response)
    return response.json()
  }).catch((err) => {
    console.error('Api request error: ', err)
  })
}
export default persist(App)