import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App(props) {
  useEffect(() => {
    const getUrlOption = () => {
      let str = location.search.substr(1).split('&')
      let obj = {}
      str.forEach((e) => {
        let list = e.split('=')
        obj[list[0]] = list[1]
      })
      return obj
    }
    console.log('url', getUrlOption())
    window.localStorage.setItem('token-react-ts', 'token-123')
    console.log('token', window.localStorage.getItem('token'))
  })
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
