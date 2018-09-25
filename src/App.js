import React, { Component } from 'react'
import RenderIf from './chapters/02-clean-up-your-code/render-if'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="title">React Design Patterns and Best Practices</h1>
        <div className="chapter">
          <h2>Chapter 2</h2>
          <RenderIf />
        </div>
      </div>
    )
  }
}

export default App
