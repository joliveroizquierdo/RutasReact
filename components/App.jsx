import React from 'react'
import NavLink from './NavLink'

export default class App extends React.Component{
  render() {
    return (
      <div>
        <h1>Primer ejercicio React Router</h1>
        <h2>Jorge Armando Olivero</h2>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}