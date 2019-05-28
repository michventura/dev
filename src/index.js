import React from 'react'
import {render} from 'react-dom'

function App() {
  return <div>Mounted!</div>
}

const root = document.getElementById('root')
render(<App />, root)
