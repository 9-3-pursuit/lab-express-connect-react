import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <h1>Captain's Log</h1>
      <button><Link to={"/logs"}>Logs</Link></button>
      <button><Link to={"/logs/new"}>New Log</Link></button>
    </nav>
  )
}

export default Nav