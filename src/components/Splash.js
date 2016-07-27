import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

class Splash extends Component {
  render() {

    return (
      <div className="splashContainer">
      <Paper
      className="splashDescription"
      zDepth={1}
      children={
        <div>
        <h1>Find web development tutors in the Boulder area</h1>
        </div>
      } />
      </div>
    )
  }
}

export default Splash
